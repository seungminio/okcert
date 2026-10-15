import { createCipheriv, createDecipheriv, getCiphers } from 'crypto';
import iconv from 'iconv-lite';
import { EncAlgoCode } from '../types';

interface IAlgoSpec {
  cipher: 'aes-128-cbc' | 'seed-cbc' | 'seed-ecb';
  encoding: 'hex' | 'base64';
  useIv: boolean;
}

/**
 * 임베디드 OTP 규격서 첨부 3 : 알고리즘 코드 표
 * 패딩은 모두 PKCS7 (Node.js crypto 기본값)
 */
export const ALGORITHMS: Record<EncAlgoCode, IAlgoSpec> = {
  '0111': { cipher: 'seed-cbc', encoding: 'hex', useIv: true },
  '0130': { cipher: 'seed-ecb', encoding: 'hex', useIv: false },
  '0131': { cipher: 'seed-cbc', encoding: 'hex', useIv: true },
  '0331': { cipher: 'aes-128-cbc', encoding: 'hex', useIv: true },
  '1130': { cipher: 'seed-ecb', encoding: 'base64', useIv: false },
  '1131': { cipher: 'seed-cbc', encoding: 'base64', useIv: true },
  '1331': { cipher: 'aes-128-cbc', encoding: 'base64', useIv: true },
};

const BLOCK_SIZE = 16;
const KEY_SIZE = 16;

export type Charset = 'utf8' | 'euc-kr';

export interface ICipherOptions {
  algo_cd: EncAlgoCode;
  key: Buffer;
  /** HEX 인코딩 IV. 미지정시 0x00 블록 사용 */
  iv?: string;
}

export const resolveAlgorithm = (algo_cd: string): IAlgoSpec => {
  const spec = ALGORITHMS[algo_cd as EncAlgoCode];
  if (!spec) throw new Error(`@okcert :: 지원하지 않는 암호화 알고리즘 코드입니다: ${algo_cd}`);
  if (!getCiphers().includes(spec.cipher)) {
    throw new Error(
      `@okcert :: 현재 Node.js 의 OpenSSL 이 '${spec.cipher}' 를 지원하지 않습니다. ` +
        `AES128CBC 계열(enc_algo_cd: 0331 또는 1331) 사용을 권장합니다.`,
    );
  }
  return spec;
};

export const toKeyBuffer = (key: string | Buffer, encoding: BufferEncoding = 'utf8'): Buffer => {
  const buf = Buffer.isBuffer(key) ? key : Buffer.from(key, encoding);
  if (buf.length !== KEY_SIZE) {
    throw new Error(
      `@okcert :: 암호화 키 길이가 올바르지 않습니다. 16 bytes 가 필요하지만 ${buf.length} bytes 입니다. ` +
        `(enc_key_encoding 옵션을 확인하세요)`,
    );
  }
  return buf;
};

export const toIvBuffer = (iv?: string): Buffer => {
  if (!iv) return Buffer.alloc(BLOCK_SIZE, 0);
  if (!/^[0-9a-fA-F]{32}$/.test(iv)) {
    throw new Error('@okcert :: enc_iv 는 HEX 인코딩된 32자(16 bytes) 문자열이어야 합니다.');
  }
  return Buffer.from(iv, 'hex');
};

const encodeOutput = (buf: Buffer, encoding: 'hex' | 'base64') =>
  encoding === 'hex' ? buf.toString('hex').toUpperCase() : buf.toString('base64');

/**
 * 평문을 알고리즘 코드에 따라 암호화하고 HEX/BASE64 문자열로 반환합니다.
 */
export const encrypt = (plain: string, options: ICipherOptions, charset: Charset = 'utf8'): string => {
  const spec = resolveAlgorithm(options.algo_cd);
  const input = charset === 'euc-kr' ? iconv.encode(plain, 'euc-kr') : Buffer.from(plain, 'utf8');
  const cipher = createCipheriv(spec.cipher, options.key, spec.useIv ? toIvBuffer(options.iv) : null);
  const out = Buffer.concat([cipher.update(input), cipher.final()]);
  return encodeOutput(out, spec.encoding);
};

/**
 * HEX/BASE64 암호문을 복호화하여 평문 문자열로 반환합니다.
 */
export const decrypt = (encoded: string, options: ICipherOptions, charset: Charset = 'utf8'): string => {
  const spec = resolveAlgorithm(options.algo_cd);
  const input = Buffer.from(encoded, spec.encoding);
  const decipher = createDecipheriv(spec.cipher, options.key, spec.useIv ? toIvBuffer(options.iv) : null);
  const out = Buffer.concat([decipher.update(input), decipher.final()]);
  return charset === 'euc-kr' ? iconv.decode(out, 'euc-kr') : out.toString('utf8');
};
