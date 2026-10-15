import { IConfirmPhoneAuth, IOkCertJavaClass, IOkCertJavaOptions, IRequestPhoneAuth } from '../types';
import assign from '../utils/assign';

type JavaBridge = typeof import('java-bridge');

/**
 * `java-bridge` 는 네이티브 바인딩을 포함한 무거운 의존성이므로 Java 모드가 실제로 사용될 때만 로드합니다.
 */
const loadBridge = (): JavaBridge => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require('java-bridge');
  } catch (e) {
    throw new Error(
      `@okcert :: Java 모드를 사용하려면 'java-bridge' 패키지와 JDK 가 필요합니다. (${(e as Error).message})`,
    );
  }
};

export default class JavaDriver {
  private readonly bridge: JavaBridge;
  private readonly target: string;
  private readonly license: string;
  private readonly cp_cd: string;
  private readonly site_url: string;
  private readonly site_name: string;

  constructor(options: IOkCertJavaOptions) {
    this.bridge = loadBridge();
    this.bridge.appendClasspath(options.module);
    this.target = options.target;
    this.license = options.license;
    this.cp_cd = options.cp_cd;
    this.site_url = options.site_url;
    this.site_name = options.site_name;
  }

  public getOKCertInstance = async (): Promise<IOkCertJavaClass> => {
    const OkCertClass = await this.bridge.importClassAsync('kcb.module.v3.OkCert');
    return OkCertClass as unknown as IOkCertJavaClass;
  };

  private call = async (service: string, body: Record<string, unknown>) => {
    const OkCertClass = await this.getOKCertInstance();
    const OKCert = new OkCertClass();

    const data = await OKCert.callOkCert(this.target, this.cp_cd, service, this.license, JSON.stringify(body));

    if (!data) throw Error('@okcert3 :: callOkCert 값 오류');

    return JSON.parse(data);
  };

  public requestPhoneAuth = async (body: IRequestPhoneAuth) => {
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
      CHNL_CD: body.chnl_cd || '0000',
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

    return this.call('IDS_HS_EMBED_SMS_REQ', assigned_body);
  };

  public confirmPhoneAuth = async (body: IConfirmPhoneAuth) =>
    this.call('IDS_HS_EMBED_SMS_CIDI', {
      TX_SEQ_NO: body.tx_seq_no,
      TEL_NO: body.tel_no,
      OTP_NO: body.otp_no,
    });
}
