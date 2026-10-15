import http from 'http';
import https from 'https';
import { URL } from 'url';

export interface IHttpResponse {
  status: number;
  headers: http.IncomingHttpHeaders;
  body: string;
}

/**
 * 최소한의 POST 클라이언트. 외부 의존성 없이 Node 내장 http/https 만 사용합니다.
 * (http 는 로컬 mock 서버 테스트용이며, KCB 는 TLS 1.2 이상 https 만 허용합니다.)
 */
export const post = (
  url: string,
  headers: Record<string, string>,
  body: string,
  timeout: number,
): Promise<IHttpResponse> =>
  new Promise((resolve, reject) => {
    const target = new URL(url);
    const client = target.protocol === 'http:' ? http : https;
    const payload = Buffer.from(body, 'utf8');

    const req = client.request(
      target,
      {
        method: 'POST',
        headers: { ...headers, 'content-length': String(payload.length) },
        timeout,
      },
      (res) => {
        const chunks: Buffer[] = [];
        res.on('data', (chunk: Buffer) => chunks.push(chunk));
        res.on('end', () =>
          resolve({
            status: res.statusCode || 0,
            headers: res.headers,
            body: Buffer.concat(chunks).toString('utf8'),
          }),
        );
        res.on('error', reject);
      },
    );

    req.on('timeout', () => req.destroy(new Error(`@okcert :: 요청 시간 초과 (${timeout}ms) : ${url}`)));
    req.on('error', reject);
    req.end(payload);
  });
