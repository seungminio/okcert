export type Target = 'PROD' | 'TEST';

/**
 * 암호화 알고리즘 코드 (임베디드 OTP 규격서 첨부 3)
 *
 * - 0111 / 0131 : SEED128CBC + PKCS7 + HEXENC
 * - 0130        : SEED128ECB + PKCS7 + HEXENC
 * - 0331        : AES128CBC  + PKCS7 + HEXENC
 * - 1130        : SEED128ECB + PKCS7 + BASE64
 * - 1131        : SEED128CBC + PKCS7 + BASE64
 * - 1331        : AES128CBC  + PKCS7 + BASE64
 *
 * SEED 계열은 Node.js 의 OpenSSL 빌드가 `seed-cbc` / `seed-ecb` 를 제공하는 경우에만 사용할 수 있습니다.
 * (일반적인 Node.js 배포판에는 포함되어 있지 않으므로 AES128CBC 계열(0331, 1331) 사용을 권장합니다.)
 */
export type EncAlgoCode = '0111' | '0130' | '0131' | '0331' | '1130' | '1131' | '1331';

interface IOkCertCommonOptions {
  /**
   * 타겟 : 운영/테스트 전환시 변경 필요 (테스트="TEST", 운영="PROD")
   *
   * API 모드의 경우 통신 3사가 별도 테스트계를 제공하지 않아 KCB 운영계(PROD)로 테스트를 진행합니다.
   */
  target: Target;
  /**
   * 회원사코드 (식별회원사코드, 12자리)
   */
  cp_cd: string;
  /**
   * 회원사 사이트 URL
   */
  site_url: string;
  /**
   * 사이트명, SMS인증번호문자에 표시됨 (통신사 제한으로 최대 24Byte)
   */
  site_name: string;
}

/**
 * Java 모듈(jar) 기반 연동 옵션
 */
export interface IOkCertJavaOptions extends IOkCertCommonOptions {
  /**
   * 라이센스 파일
   */
  license: string;
  /**
   * 모듈 파일
   */
  module: string;
}

/**
 * REST API 기반 연동 옵션 (KCB본인확인 공통 API 규격 v2.2 / 임베디드 OTP 서비스 API 규격 v1.2)
 */
export interface IOkCertApiOptions extends IOkCertCommonOptions {
  /**
   * KCB에서 발급한 API Gateway 클라이언트 ID
   */
  client_id: string;
  /**
   * KCB에서 발급한 API Gateway 클라이언트 Secret (인증 KEY)
   */
  client_secret: string;
  /**
   * KCB에서 발급한 암호화 키. 문자열인 경우 `enc_key_encoding` 으로 해석됩니다. (AES128 / SEED128 : 16 bytes)
   */
  enc_key: string | Buffer;
  /**
   * `enc_key` 문자열 해석 방식 (기본값 `utf8`)
   */
  enc_key_encoding?: BufferEncoding;
  /**
   * KCB에서 부여한 암호화 키 일련번호 (예: `0001`)
   */
  enc_key_no: string;
  /**
   * 암호화 알고리즘 코드 (기본값 `0331` : AES128CBC + PKCS7 + HEXENC)
   */
  enc_algo_cd?: EncAlgoCode;
  /**
   * CBC 모드에서 사용할 IV (HEX 인코딩, 32자). 미지정시 0x00 으로 채운 블록을 사용하며 요청에도 전송하지 않습니다.
   */
  enc_iv?: string;
  /**
   * API Gateway base URL 을 직접 지정합니다. (전용선 접속 등)
   *
   * 미지정시 `target` 에 따라 공중망 운영/테스트 주소가 사용됩니다.
   * - PROD : https://api.ok-name.co.kr:20443
   * - TEST : https://tapi.ok-name.co.kr:40443
   */
  base_url?: string;
  /**
   * 채널코드 (기본값 `0000`)
   */
  chnl_cd?: string;
  /**
   * HTTP 요청 타임아웃 (ms, 기본값 30000)
   */
  timeout?: number;
}

export type IOkCert = IOkCertJavaOptions | IOkCertApiOptions;

export type TelComCode = '01' | '02' | '03' | '04' | '05' | '06';

export interface IRequestPhoneAuth {
  /**
   * 사용자IP
   */
  user_ip?: string;
  /**
   * 성명
   */
  name: string;
  /**
   * 생년월일 (YYYYMMDD)
   */
  birthday: string;
  /**
   * 성별 (남:M, 여:F)
   */
  sex_cd: 'M' | 'F';
  /**
   * 내외국인구분 (내국인:L, 외국인:F)
   */
  ntv_frnr_cd: 'L' | 'F';
  /**
   * 통신사코드(01:SKT, 02:KT, 03:LGU+, 04:SKT알뜰폰, 05:KT알뜰폰, 06:LGU+알뜰폰)
   */
  tel_com_cd: TelComCode | string;
  /**
   * 휴대폰번호 (숫자만)
   */
  tel_no: string;
  /**
   * 인증요청사유코드 (00:회원가입, 01:성인인증, 02:회원정보수정, 03:비밀번호찾기, 04:상품구매, 99:기타)
   */
  rqst_caus_cd: '00' | '01' | '02' | '03' | '04' | '99';
  /**
   * 재전송여부. `Y` 이고 `tx_seq_no` 가 있으면 OTP 재전송으로 처리됩니다.
   */
  sms_resend_yn?: 'Y' | 'N' | string;
  /**
   * 거래고유번호. 동일문자열을 두번 사용할 수 없음.
   *
   * API 모드에서는 미입력시 모듈이 자동 생성하며 응답의 `rqst_svc_tx_seqno` 로 확인할 수 있습니다.
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
  /**
   * [API 전용] OTP 수신방식 (GS: SMS / GL: LMS). KCB 영업담당자와 사전협의 필요.
   */
  sms_lms_tp?: 'GS' | 'GL';
  /**
   * [API 전용] OTP 메시지/발신번호 설정 코드. KCB 영업담당자와 사전협의 필요.
   */
  msg_tp_cd?: string;
  /**
   * [API 전용] 메시지 파라미터. `|` 구분자로 분리된 치환 변수 (예: `홍길동|자동차|20180103`)
   */
  msg_param_str?: string;
  /**
   * [API 전용] 채널코드. 미입력시 인스턴스 옵션 또는 기본값 `0000` 사용.
   */
  chnl_cd?: string;
}

export interface IResendPhoneAuth extends IRequestPhoneAuth {
  /**
   * 최초 거래요청의 거래고유번호
   */
  tx_seq_no: string;
}

export interface IConfirmPhoneAuth {
  /**
   * 거래요청시 사용한 거래고유번호
   */
  tx_seq_no: string;
  /**
   * 거래요청시 사용한 휴대폰번호
   */
  tel_no: string;
  /**
   * SMS/LMS 로 수신한 OTP 인증번호 (6자리)
   */
  otp_no: string;
}

/**
 * API 모드 공통 응답
 */
export interface IApiResponse {
  /**
   * 응답코드 (B000: 정상 처리, 그 외 규격서 첨부 5 참고)
   */
  rsp_cd: string;
  /**
   * 응답메시지
   */
  rsp_msg: string;
  /**
   * 요청서비스거래일련번호
   */
  rqst_svc_tx_seqno: string;
  /**
   * 요청에 사용된 거래고유번호 (x-api-tran-id). KCB 문의시 사용.
   */
  x_api_tran_id: string;
  [key: string]: string | undefined;
}

/**
 * API 모드 결과확인 응답. [암호화] 항목은 모듈이 복호화한 평문입니다.
 */
export interface IApiConfirmResponse extends IApiResponse {
  enc_algo_cd?: string;
  enc_iv?: string;
  enc_key_no?: string;
  /** 성명 */
  nm?: string;
  /** 생년월일 (YYYYMMDD) */
  brdt?: string;
  /** 성별 (M/F) */
  sex?: string;
  /** 내외국인구분 (L/F) */
  ntv_frnr_cd?: string;
  /** DI 중복가입확인정보 (계약시 선택한 경우) */
  di?: string;
  /** CI 연계정보 (계약시 선택한 경우) */
  ci?: string;
  /** CI2 연계정보 (현재 미사용) */
  ci2?: string;
  /** CI 업데이트 횟수 */
  ci_update?: string;
  /** 통신사 구분 */
  cmcm_tp_cd?: string;
  /** 휴대폰번호 */
  mbphn_no?: string;
}

export interface IAccessToken {
  token_type: string;
  access_token: string;
  /** 접근토큰 유효시간 (초) */
  expires_in: number;
  scope: string;
  /** 모듈이 계산한 만료 시각 (epoch ms) */
  expires_at: number;
}
