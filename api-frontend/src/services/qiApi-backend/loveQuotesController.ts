// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** random GET /api/loveQuotes/random */
export async function randomUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseobject>('/api/loveQuotes/random', {
    method: 'GET',
    ...(options || {}),
  });
}
