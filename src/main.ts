import { appendClasspath, importClassAsync } from 'java-bridge';
import { OkCertClass as OkCertType } from './bridge/kcb/module/v3/OkCert';
import assign from './utils/assign';

interface IOkCert {
  /**
   * 타겟 : 운영/테스트 전환시 변경 필요 (테스트="TEST", 운영="PROD")
   */
  target: 'PROD' | 'TEST';
  /**
   * 라이센스 파일
   */
  license: string;
  /**
   * 모듈 파일
   */
  module: string;
  /**
   * 회원사코드
   */
  cp_cd: string;
  /**
   * 회원사 사이트 URL
   */
  site_url: string;
  /**
   * 사이트명, SMS인증번호문자에 표시됨
   */
  site_name: string;
}

interface IRequestPhoneAuth {
  /**
   * 사용자IP
   */
  user_ip?: string;
  /**
   * 성명
   */
  name: string;
  /**
   * 생년월일
   */
  birthday: string;
  /**
   * 성별 (남:M, 여:F)
   */
  sex_cd: 'M' | 'F';
  /**
   * 내외국인구분 (내국인:F, 외국인:L)
   */
  ntv_frnr_cd: 'L' | 'F';
  /**
   * 통신사코드(01:SKT, 02:KT, 03:LGU+, 04:SKT알뜰폰, 05:KT알뜰폰, 06:LGU+알뜰폰)
   */
  tel_com_cd: string;
  /**
   * 휴대폰번호
   */
  tel_no: string;
  /**
   * 인증요청사유코드 (00:회원가입, 01:성인인증, 02:회원정보수정, 03:비밀번호찾기, 04:상품구매, 99:기타)
   */
  rqst_caus_cd: '00' | '01' | '02' | '03' | '04' | '99';
  /**
   * 재전송여부
   */
  sms_resend_yn?: string;
  /**
   * 거래고유번호. 동일문자열을 두번 사용할 수 없음.
   */
  tx_seq_no?: string;
  /**
   * 앱해쉬 문자열 (Google SMS Retriever API 사용 시)
   */
  app_hash_str?: string;
  /**
   * 사이트명. 미입력시 인스턴스 생성시 입력한 사이트명이 사용됨.
   */
  site_name?: string;
}

export default class OKCert {
  private target: string = 'PROD';
  private license: string = '';
  private cp_cd: string = '';
  private site_url: string = '';
  private site_name: string = '';

  constructor(options: IOkCert) {
    appendClasspath(options.module);
    this.target = options.target;
    this.license = options.license;
    this.cp_cd = options.cp_cd;
    this.site_url = options.site_url;
    this.site_name = options.site_name;
  }

  public getOKCertInstance = async () => {
    const OkCertClass = await importClassAsync<typeof OkCertType>('kcb.module.v3.OkCert');
    return OkCertClass;
  };

  public requestPhoneAuth = async (body: IRequestPhoneAuth) => {
    const OkCertClass = await this.getOKCertInstance();
    const OKCert = new OkCertClass();

    const SERVICE_NAME = 'IDS_HS_EMBED_SMS_REQ';

    const request_body = {
      NAME: body.name,
      BIRTHDAY: body.birthday,
      SEX_CD: body.sex_cd,
      NTV_FRNR_CD: body.ntv_frnr_cd,
      TEL_COM_CD: body.tel_com_cd,
      TEL_NO: body.tel_no,
      USER_IP: body.user_ip,
      SITE_URL: this.site_url,
      SITE_NAME: body.site_name || this.site_name,
      RQST_CAUS_CD: body.rqst_caus_cd,
      CHNL_CD: '0000', // 고정
      APP_HASH_STR: body.app_hash_str,
      SMS_RESEND_YN: body.sms_resend_yn,
      TX_SEQ_NO: body.tx_seq_no,
      // 약관 고정
      AGREE1: 'Y',
      AGREE2: 'Y',
      AGREE3: 'Y',
      AGREE4: 'Y',
    };

    const assigned_body = assign(
      {
        NAME: 'x',
        BIRTHDAY: 'x',
        SEX_CD: 'x',
        NTV_FRNR_CD: 'x',
        TEL_COM_CD: 'x',
        RQST_CAUS_CD: '99',
        SMS_RESEND_YN: 'N',
        APP_HASH_STR: '',
      },
      request_body,
    );

    const data = await OKCert.callOkCert(
      this.target,
      this.cp_cd,
      SERVICE_NAME,
      this.license,
      JSON.stringify(assigned_body),
    );

    if (!data) throw Error('@okcert3 :: callOkCert 값 오류');

    const result = JSON.parse(data);

    return result;
  };

  public confirmPhoneAuth = async (body: { tx_seq_no: string; tel_no: string; otp_no: string }) => {
    const OkCertClass = await this.getOKCertInstance();
    const OKCert = new OkCertClass();

    const SERVICE_NAME = 'IDS_HS_EMBED_SMS_CIDI';

    const request_body = {
      TX_SEQ_NO: body.tx_seq_no,
      TEL_NO: body.tel_no,
      OTP_NO: body.otp_no,
    };

    const data = await OKCert.callOkCert(
      this.target,
      this.cp_cd,
      SERVICE_NAME,
      this.license,
      JSON.stringify(request_body),
    );

    if (!data) throw Error('@okcert3 :: callOkCert 값 오류');

    const result = JSON.parse(data);

    return result;
  };
}
