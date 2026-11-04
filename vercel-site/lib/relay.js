export const MAX_BODY = 1500000;
const route = /^(?:google-wallet\/(?:config|google\/(?:challenge|login)|me|wallet(?:\/(?:challenge|complete))?)|account\/(?:p2p-details\/(?:read|save|utr|simple-(?:config|register)|profile-(?:read|save)|offers-(?:list|create|select|cancel|link))|config|wallet-auth\/(?:challenge|login|logout)|me|challenge|complete|matrix-ticket)|p2p\/test-payments\/(?:config|orders|verify)|profiles(?:\/(?:resolve|address\/0x[\da-f]{40}|name\/[a-z0-9_]{3,24}|search\/[a-z0-9_]{2,24}))?|health|(?:mainnet-)?deployment(?:\/artifact)?|requests(?:\/payment\/[1-9]\d{0,76}|\/[\da-f-]{36}(?:\/(?:authorize|reject))?)?)$/i;
const result = (error, status) => ({ status, type: 'application/json', body: JSON.stringify({ error }) });

export async function relay({ method, path, origin, host, contentType, body, authorization }, fetcher = fetch, configuredOrigin = process.env.GHOSTCHAT_API_ORIGIN) {
  if (!['GET', 'POST'].includes(method)) return result('Method not allowed.', 405);
  if (typeof path !== 'string' || !route.test(path)) return result('API route not found.', 404);
  if (method === 'POST') {
    if (origin && origin !== `https://${host}`) return result('Cross-origin writes are not allowed.', 403);
    if (!contentType?.toLowerCase().includes('application/json')) return result('JSON content type is required.', 415);
    if (!body || body.length > MAX_BODY) return result(body ? 'Request is too large.' : 'Missing JSON body.', body ? 413 : 400);
  }
  if (!configuredOrigin) return result('GhostChat account and payment services are being connected. Please try again once setup is complete.', 503);
  let upstream;
  try {
    const url = new URL(configuredOrigin);
    if (url.protocol !== 'https:' || url.username || url.password || url.pathname !== '/' || url.search || url.hash) throw new Error();
    upstream = url.origin;
  } catch { return result('The GhostChat backend address is not configured correctly.', 503); }
  try {
    const response = await fetcher(`${upstream}/api/${path}`, {
      method, headers: { Accept: 'application/json', ...(typeof authorization === 'string' && authorization.startsWith('Bearer ') ? { Authorization: authorization } : {}), ...(method === 'POST' ? { 'Content-Type': 'application/json', Origin: origin || `https://${host}` } : {}) },
      body: method === 'POST' ? body : undefined, signal: AbortSignal.timeout(25000), redirect: 'error',
    });
    const type = response.headers.get('content-type') || '';
    if (!type.includes('application/json')) return result('Claim relay returned an unexpected response. Please retry.', 502);
    return { status: response.status, type, body: await response.text() };
  } catch {
    return result('Claim relay temporarily unavailable. Please retry shortly.', 502);
  }
}
