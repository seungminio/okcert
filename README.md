# KCB OKCert3 서비스 NodeJS 모듈

[코리아크레딧뷰로(주) 오케이네임](https://www.ok-name.co.kr/)(이하 "서비스제공업체") <br />
휴대폰 본인확인 서비스 NodeJS 모듈입니다.

두 가지 연동 방식을 지원합니다.

| 모드   | 기반                                                                                   | 필요 항목                                   |
| ------ | -------------------------------------------------------------------------------------- | ------------------------------------------- |
| `java` | OKCert3 Java 1.5 서비스 모듈 (`java-bridge` 로 jar 호출)                                | JDK, 모듈 파일(jar), 라이센스 파일(dat)     |
| `api`  | KCB본인확인(ok-name) 공통 API 규격 v2.2 + 휴대폰본인확인(임베디드_OTP) 서비스 API 규격 v1.2 | Client ID / Secret, 암호화 키 / 키 일련번호 |

본 모듈은 **서비스제공업체에서 공식적으로 제공하는 모듈이 아니며**, <br />
해당 모듈을 사용하여 발생하는 문제는 **모두 사용자에게 있음을 알려드립니다.**

## 설치하기

```
$ npm install okcert
```

```
$ yarn add okcert
```

`okcert`는 [`yarn berry (PnP - Plug'n'Play)`](https://github.com/yarnpkg/berry)를 지원하고 있습니다.

## 설정하기

생성자 옵션에 따라 모드가 결정됩니다.

- `module` / `license` 가 있으면 **Java 모드**
- `client_id` / `client_secret` 가 있으면 **API 모드**

### Java 모드

```ts
new OKCert({
  target: 'PROD',
  module: __dirname + '/모듈_파일_경로/모듈_파일.jar',
  license: __dirname + '/라이센스_파일_경로/라이센스_파일.dat',
  cp_cd: 'P00000000001',
  site_name: 'example',
  site_url: 'example.com',
});
```

본 모듈은 서비스제공업체에서 공식적으로 제공하는 모듈이 아니기에 <br />
`Java 모듈 파일(jar)`의 경로를 `module`에 입력해주셔야 합니다.

서비스제공업체 담당자에게 전달받은 `모듈 파일`과 `라이센스 파일`의 경로를 입력해주세요.

### API 모드

```ts
new OKCert({
  target: 'PROD',
  cp_cd: 'P00000000001', // 회원사코드 (idcf_mbr_com_cd)
  client_id: '...', // API Gateway 클라이언트 ID
  client_secret: '...', // API Gateway 인증 KEY
  enc_key: '...', // KCB에서 부여한 암호화 키 (16 bytes)
  enc_key_no: '0001', // KCB에서 부여한 암호화 키 일련번호
  enc_algo_cd: '0331', // (선택) 암호화 알고리즘 코드. 기본값 0331 (AES128CBC + PKCS7 + HEXENC)
  enc_iv: undefined, // (선택) HEX 인코딩 IV (32자). 미지정시 0x00 블록
  base_url: undefined, // (선택) 전용선 등 API Gateway 주소 직접 지정
  site_name: 'example',
  site_url: 'example.com',
});
```

| 옵션               | 설명                                                                                                                                                 |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target`           | `PROD` → `https://api.ok-name.co.kr:20443`, `TEST` → `https://tapi.ok-name.co.kr:40443`. 통신 3사가 테스트계를 제공하지 않으므로 KCB 안내에 따라 운영계로 테스트합니다. |
| `enc_key`          | 문자열 또는 `Buffer`. 문자열은 `enc_key_encoding`(기본 `utf8`) 으로 해석하며 16 bytes 여야 합니다.                                                      |
| `enc_algo_cd`      | `0331`, `1331` (AES128CBC) 를 권장합니다. SEED 계열(`0111`, `0130`, `0131`, `1130`, `1131`) 은 Node.js 의 OpenSSL 이 SEED 를 제공하는 경우에만 동작합니다. |
| `timeout`          | HTTP 타임아웃 (ms, 기본 30000)                                                                                                                       |

접근토큰(OAuth 2.0 Client Credentials)은 모듈이 발급·캐시하며, 만료 시 자동 재발급합니다. <br />
KCB API Gateway 는 등록된 IP 만 허용하므로 서버의 NAT IP 를 KCB 에 사전 등록해야 합니다.

## 예제

```ts
import OKCert from 'okcert';

const instance = new OKCert({
  /* Java 또는 API 옵션 */
});

// 1. 거래요청 (통신사 명의 확인 후 OTP 발송)
const req = await instance.requestPhoneAuth({
  name: '홍길동',
  birthday: '19900101',
  sex_cd: 'M',
  ntv_frnr_cd: 'L',
  tel_com_cd: '01',
  tel_no: '01000000000',
  rqst_caus_cd: '00',
  user_ip: '1.2.3.4',
});

// 2. (선택) OTP 재전송
await instance.resendPhoneAuth({ ...body, tx_seq_no });

// 3. 결과확인 (OTP 검증)
const result = await instance.confirmPhoneAuth({
  tx_seq_no,
  tel_no: '01000000000',
  otp_no: '123456',
});
```

### 응답 형식

응답은 각 연동 방식의 원본 형식을 그대로 반환합니다. 모드를 전환하는 경우 응답 처리 코드를 함께 수정해야 합니다.

- **Java 모드** : Java 모듈의 JSON 응답 (`RSLT_CD`, `RSLT_MSG`, `TX_SEQ_NO` 등)
- **API 모드** : 규격서의 JSON 응답 (`rsp_cd`, `rsp_msg`, `rqst_svc_tx_seqno` 등) 에 요청 추적용 `x_api_tran_id` 를 추가.
  결과확인 응답의 [암호화] 항목(`nm`, `brdt`, `sex`, `ntv_frnr_cd`, `di`, `ci`, `ci2`, `mbphn_no`) 은 복호화된 평문입니다.

API 모드에서 `tx_seq_no` 를 생략하면 요청서비스거래일련번호를 자동 생성하며, 응답의 `rqst_svc_tx_seqno` 로 확인할 수 있습니다. <br />
서비스 응답코드(`rsp_cd`, 정상 `B000`) 는 예외가 아닌 응답으로 반환되고, API Gateway 오류(토큰/IP/인증 실패 등) 는 `OKCertApiError` 로 throw 됩니다.

### API 전용 요청 항목

| 항목            | 설명                                                              |
| --------------- | ----------------------------------------------------------------- |
| `sms_lms_tp`    | OTP 수신방식 (`GS`: SMS / `GL`: LMS). KCB 영업담당자와 사전협의 필요 |
| `msg_tp_cd`     | OTP 메시지/발신번호 설정 코드. KCB 영업담당자와 사전협의 필요        |
| `msg_param_str` | 메시지 치환 파라미터 (`\|` 구분)                                   |
| `chnl_cd`       | 채널코드 (기본 `0000`)                                             |
