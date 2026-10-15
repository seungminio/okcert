import { randomInt } from 'crypto';

const pad = (n: number, len: number) => String(n).padStart(len, '0');

const ALNUM = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const randomAlnum = (len: number) => {
  let out = '';
  for (let i = 0; i < len; i++) out += ALNUM[randomInt(ALNUM.length)];
  return out;
};

/**
 * YYYYMMDDhhmmssfff (17자리, 로컬 시간)
 */
export const timestamp = (date: Date = new Date()) =>
  pad(date.getFullYear(), 4) +
  pad(date.getMonth() + 1, 2) +
  pad(date.getDate(), 2) +
  pad(date.getHours(), 2) +
  pad(date.getMinutes(), 2) +
  pad(date.getSeconds(), 2) +
  pad(date.getMilliseconds(), 3);

/**
 * 거래고유번호 (x-api-tran-id) : 회원사코드(12) + TIMESTAMP(17) + 난수(8), 최대 50 bytes
 */
export const generateTranId = (cp_cd: string) => `${cp_cd}${timestamp()}${randomAlnum(8)}`.slice(0, 50);

/**
 * 요청서비스거래일련번호 (rqst_svc_tx_seqno) : YYMMDDhhmmss + 'KC' + 난수(3) + 밀리초(3), 최대 30 bytes
 */
export const generateTxSeqNo = () => {
  const ts = timestamp();
  return `${ts.slice(2, 14)}KC${pad(randomInt(1000), 3)}${ts.slice(14, 17)}`;
};
