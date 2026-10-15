import ApiDriver from './drivers/api';
import JavaDriver from './drivers/java';
import {
  IApiConfirmResponse,
  IApiResponse,
  IConfirmPhoneAuth,
  IOkCert,
  IOkCertApiOptions,
  IRequestPhoneAuth,
  IResendPhoneAuth,
} from './types';

export * from './types';
export { OKCertApiError, BASE_URLS, PATHS } from './drivers/api';
export { ALGORITHMS, encrypt, decrypt } from './utils/crypto';
export { generateTranId, generateTxSeqNo } from './utils/id';

export type OKCertMode = 'java' | 'api';

const isApiOptions = (options: IOkCert): options is IOkCertApiOptions => 'client_id' in options;

export default class OKCert {
  /**
   * 연동 방식. `module`/`license` 옵션이면 `java`, `client_id`/`client_secret` 옵션이면 `api`.
   */
  public readonly mode: OKCertMode;
  private readonly driver: JavaDriver | ApiDriver;

  constructor(options: IOkCert) {
    if (isApiOptions(options)) {
      this.mode = 'api';
      this.driver = new ApiDriver(options);
    } else {
      this.mode = 'java';
      this.driver = new JavaDriver(options);
    }
  }

  private get java(): JavaDriver {
    if (!(this.driver instanceof JavaDriver)) throw new Error('@okcert :: Java 모드에서만 사용할 수 있습니다.');
    return this.driver;
  }

  private get api(): ApiDriver {
    if (!(this.driver instanceof ApiDriver)) throw new Error('@okcert :: API 모드에서만 사용할 수 있습니다.');
    return this.driver;
  }

  /**
   * [Java 전용] `kcb.module.v3.OkCert` 클래스를 반환합니다.
   */
  public getOKCertInstance = () => this.java.getOKCertInstance();

  /**
   * [API 전용] 접근토큰을 반환합니다. (캐시 / 자동 재발급)
   */
  public getAccessToken = (force = false) => this.api.getAccessToken(force);

  /**
   * [API 전용] 캐시된 접근토큰을 폐기합니다.
   */
  public invalidateToken = () => this.api.invalidateToken();

  /**
   * 휴대폰 본인확인 거래요청 (통신사 명의 확인 후 OTP 발송)
   *
   * - Java 모드 : `IDS_HS_EMBED_SMS_REQ` 응답(JSON) 을 그대로 반환합니다.
   * - API 모드 : `/v1/id/phone/embed-sms-req` 응답을 반환합니다. (`rsp_cd`, `rsp_msg`, `rqst_svc_tx_seqno`)
   */
  public requestPhoneAuth = (body: IRequestPhoneAuth): Promise<any | IApiResponse> =>
    this.driver.requestPhoneAuth(body);

  /**
   * OTP 재전송. 최초 거래요청과 동일한 `tx_seq_no`, `tel_no` 를 사용합니다.
   *
   * - Java 모드 : `SMS_RESEND_YN=Y` 로 거래요청을 다시 호출합니다. (나머지 항목도 최초 요청과 동일하게 전달)
   * - API 모드 : `/v1/id/phone/embed-sms-resend` 를 호출합니다.
   */
  public resendPhoneAuth = (body: IResendPhoneAuth): Promise<any | IApiResponse> =>
    this.driver instanceof ApiDriver
      ? this.driver.resendPhoneAuth(body)
      : this.driver.requestPhoneAuth({ ...body, sms_resend_yn: 'Y' });

  /**
   * OTP 인증번호 확인 및 본인확인 결과 조회
   *
   * - Java 모드 : `IDS_HS_EMBED_SMS_CIDI` 응답(JSON) 을 그대로 반환합니다.
   * - API 모드 : `/v1/id/phone/embed-sms-cidi` 응답을 반환하며, [암호화] 항목은 복호화된 평문입니다.
   */
  public confirmPhoneAuth = (body: IConfirmPhoneAuth): Promise<any | IApiConfirmResponse> =>
    this.driver.confirmPhoneAuth(body);
}
