import {
  EncAlgoCode,
  IAccessToken,
  IApiConfirmResponse,
  IApiResponse,
  IConfirmPhoneAuth,
  IOkCertApiOptions,
  IRequestPhoneAuth,
  IResendPhoneAuth,
  Target,
} from '../types';
import assign from '../utils/assign';
import { Charset, decrypt, encrypt, ICipherOptions, resolveAlgorithm, toKeyBuffer } from '../utils/crypto';
import { post } from '../utils/http';
import { generateTranId, generateTxSeqNo } from '../utils/id';

/**
 * 공통 API 규격 v2.2 - 2.2 데이터 통신 규격 (공중망)
 */
export const BASE_URLS: Record<Target, string> = {
  PROD: 'https://api.ok-name.co.kr:20443',
  TEST: 'https://tapi.ok-name.co.kr:40443',
};

export const PATHS = {
  TOKEN: '/v1/oauth2/access_token',
  REQUEST: '/v1/id/phone/embed-sms-req',
  RESEND: '/v1/id/phone/embed-sms-resend',
  CONFIRM: '/v1/id/phone/embed-sms-cidi',
};

const DEFAULT_ALGO: EncAlgoCode = '0331';
const DEFAULT_TIMEOUT = 30_000;
/** 토큰 만료 전 여유 시간 (ms) */
const TOKEN_EXPIRY_MARGIN = 60_000;

/**
 * API Gateway 또는 전송 계층 오류 (서비스 응답코드 rsp_cd 는 예외가 아닌 응답으로 반환됩니다)
 */
export class OKCertApiError extends Error {
  public readonly status: number;
  public readonly error?: string;
  public readonly error_message?: string;
  public readonly x_api_tran_id?: string;
  public readonly body?: string;

  constructor(
    message: string,
    detail: { status: number; error?: string; error_message?: string; x_api_tran_id?: string; body?: string },
  ) {
    super(message);
    this.name = 'OKCertApiError';
    this.status = detail.status;
    this.error = detail.error;
    this.error_message = detail.error_message;
    this.x_api_tran_id = detail.x_api_tran_id;
    this.body = detail.body;
  }
}

/** 결과확인 응답에서 복호화 대상 항목과 문자셋 */
const CONFIRM_ENCRYPTED_FIELDS: Record<string, Charset> = {
  nm: 'euc-kr',
  brdt: 'utf8',
  sex: 'utf8',
  ntv_frnr_cd: 'utf8',
  di: 'utf8',
  ci: 'utf8',
  ci2: 'utf8',
  mbphn_no: 'utf8',
};

export default class ApiDriver {
  private readonly options: IOkCertApiOptions;
  private readonly base_url: string;
  private readonly algo_cd: EncAlgoCode;
  private readonly key: Buffer;
  private readonly timeout: number;

  private token?: IAccessToken;
  private tokenRequest?: Promise<IAccessToken>;

  constructor(options: IOkCertApiOptions) {
    this.options = options;
    this.base_url = (options.base_url || BASE_URLS[options.target]).replace(/\/+$/, '');
    this.algo_cd = options.enc_algo_cd || DEFAULT_ALGO;
    this.timeout = options.timeout ?? DEFAULT_TIMEOUT;

    resolveAlgorithm(this.algo_cd);
    this.key = toKeyBuffer(options.enc_key, options.enc_key_encoding);
  }

  // ---------------------------------------------------------------------------
  // 인증 (OAuth 2.0 Client Credentials)
  // ---------------------------------------------------------------------------

  /**
   * 접근토큰을 반환합니다. 유효한 토큰이 캐시되어 있으면 재사용하고, 만료(또는 만료 임박)시 재발급합니다.
   */
  public getAccessToken = async (force = false): Promise<IAccessToken> => {
    if (!force && this.token && this.token.expires_at - TOKEN_EXPIRY_MARGIN > Date.now()) {
      return this.token;
    }
    if (!this.tokenRequest) {
      this.tokenRequest = this.issueToken().finally(() => (this.tokenRequest = undefined));
    }
    return this.tokenRequest;
  };

  /**
   * 캐시된 접근토큰을 폐기합니다. 다음 호출시 재발급됩니다.
   */
  public invalidateToken = () => {
    this.token = undefined;
  };

  private issueToken = async (): Promise<IAccessToken> => {
    const x_api_tran_id = generateTranId(this.options.cp_cd);
    const res = await post(
      this.base_url + PATHS.TOKEN,
      {
        'content-type': 'application/json; charset=UTF-8',
        accept: 'application/json',
        'x-api-tran-id': x_api_tran_id,
      },
      JSON.stringify({
        site_cd: this.options.cp_cd,
        client_id: this.options.client_id,
        client_secret: this.options.client_secret,
        grant_type: 'client_credentials',
        scope: 'ids',
      }),
      this.timeout,
    );

    const json = this.parse(res, x_api_tran_id);
    if (json.error || !json.access_token) {
      throw new OKCertApiError(
        `@okcert :: 접근토큰 발급 실패 (${json.error || res.status}: ${json.error_message || ''})`,
        { status: res.status, error: json.error, error_message: json.error_message, x_api_tran_id, body: res.body },
      );
    }

    const expires_in = Number(json.expires_in);
    this.token = {
      token_type: json.token_type || 'Bearer',
      access_token: json.access_token,
      expires_in,
      scope: json.scope,
      expires_at: Date.now() + expires_in * 1000,
    };
    return this.token;
  };

  // ---------------------------------------------------------------------------
  // 서비스 API
  // ---------------------------------------------------------------------------

  public requestPhoneAuth = async (body: IRequestPhoneAuth): Promise<IApiResponse> => {
    if (body.sms_resend_yn === 'Y' && body.tx_seq_no) {
      return this.resendPhoneAuth(body as IResendPhoneAuth);
    }

    const request_body = assign(
      {},
      {
        idcf_mbr_com_cd: this.options.cp_cd,
        rqst_svc_tx_seqno: body.tx_seq_no || generateTxSeqNo(),
        site_url: this.options.site_url,
        site_name: body.site_name || this.options.site_name,
        rqst_ip: body.user_ip,
        rqst_cause_cd: body.rqst_caus_cd,
        chnl_cd: body.chnl_cd || this.options.chnl_cd || '0000',
        // 약관 고정 (Java 모듈과 동일)
        agr_yn1: 'Y',
        agr_yn2: 'Y',
        agr_yn3: 'Y',
        agr_yn4: 'Y',
        sms_lms_tp: body.sms_lms_tp,
        msg_tp_cd: body.msg_tp_cd,
        app_hash_str: body.app_hash_str,
        ...this.encHeader(),
        nm: this.enc(body.name, 'euc-kr'),
        brdt: this.enc(body.birthday),
        sex: this.enc(body.sex_cd),
        ntv_frnr_cd: this.enc(body.ntv_frnr_cd),
        cmcm_tp_cd: body.tel_com_cd,
        mbphn_no: this.enc(body.tel_no),
        msg_param_str: this.enc(body.msg_param_str, 'euc-kr'),
      },
    );

    return this.call(PATHS.REQUEST, request_body);
  };

  public resendPhoneAuth = async (body: IResendPhoneAuth): Promise<IApiResponse> => {
    if (!body.tx_seq_no) throw new Error('@okcert :: OTP 재전송에는 최초 거래요청의 tx_seq_no 가 필요합니다.');

    const request_body = assign(
      {},
      {
        idcf_mbr_com_cd: this.options.cp_cd,
        rqst_svc_tx_seqno: body.tx_seq_no,
        ...this.encHeader(),
        mbphn_no: this.enc(body.tel_no),
      },
    );

    return this.call(PATHS.RESEND, request_body);
  };

  public confirmPhoneAuth = async (body: IConfirmPhoneAuth): Promise<IApiConfirmResponse> => {
    const request_body = assign(
      {},
      {
        idcf_mbr_com_cd: this.options.cp_cd,
        rqst_svc_tx_seqno: body.tx_seq_no,
        otp_no: body.otp_no,
        ...this.encHeader(),
        mbphn_no: this.enc(body.tel_no),
      },
    );

    const res = (await this.call(PATHS.CONFIRM, request_body)) as IApiConfirmResponse;
    return this.decryptResponse(res);
  };

  // ---------------------------------------------------------------------------
  // 내부 구현
  // ---------------------------------------------------------------------------

  private get cipherOptions(): ICipherOptions {
    return { algo_cd: this.algo_cd, key: this.key, iv: this.options.enc_iv };
  }

  private encHeader = () => ({
    enc_algo_cd: this.algo_cd,
    enc_key_no: this.options.enc_key_no,
    enc_iv: this.options.enc_iv ? this.options.enc_iv.toUpperCase() : undefined,
  });

  private enc = (value: string | undefined, charset: Charset = 'utf8') =>
    value === undefined || value === null || value === '' ? undefined : encrypt(value, this.cipherOptions, charset);

  private decryptResponse = (res: IApiConfirmResponse): IApiConfirmResponse => {
    const options: ICipherOptions = {
      algo_cd: (res.enc_algo_cd as EncAlgoCode) || this.algo_cd,
      key: this.key,
      iv: res.enc_iv || this.options.enc_iv,
    };

    for (const [field, charset] of Object.entries(CONFIRM_ENCRYPTED_FIELDS)) {
      const value = res[field];
      if (!value) continue;
      try {
        res[field] = decrypt(value, options, charset);
      } catch (e) {
        throw new Error(
          `@okcert :: 응답 항목 '${field}' 복호화 실패. enc_key / enc_key_no / enc_algo_cd 설정을 확인하세요. (${(e as Error).message})`,
        );
      }
    }
    return res;
  };

  private call = async (path: string, body: Record<string, unknown>, retry = true): Promise<IApiResponse> => {
    const token = await this.getAccessToken();
    const x_api_tran_id = generateTranId(this.options.cp_cd);

    const res = await post(
      this.base_url + path,
      {
        'content-type': 'application/json; charset=UTF-8',
        accept: 'application/json',
        // KCB 는 token_type 을 소문자 'bearer' 로 응답하지만 규격은 'Bearer 접근토큰' 형식을 명시함
        authorization: `Bearer ${token.access_token}`,
        'x-api-tran-id': x_api_tran_id,
      },
      JSON.stringify(body),
      this.timeout,
    );

    const json = this.parse(res, x_api_tran_id);

    if (json.error) {
      // 접근토큰 만료 : 1회 재발급 후 재시도
      if (retry && json.error === 'invalid_grant') {
        this.invalidateToken();
        return this.call(path, body, false);
      }
      throw new OKCertApiError(`@okcert :: API GW 오류 (${json.error}: ${json.error_message || ''})`, {
        status: res.status,
        error: json.error,
        error_message: json.error_message,
        x_api_tran_id,
        body: res.body,
      });
    }

    return { ...json, x_api_tran_id } as IApiResponse;
  };

  private parse = (res: { status: number; body: string }, x_api_tran_id: string): Record<string, any> => {
    try {
      return res.body ? JSON.parse(res.body) : {};
    } catch {
      throw new OKCertApiError(`@okcert :: 응답 본문이 JSON 이 아닙니다 (HTTP ${res.status})`, {
        status: res.status,
        x_api_tran_id,
        body: res.body,
      });
    }
  };
}
