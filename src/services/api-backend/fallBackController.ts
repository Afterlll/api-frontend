// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** fallback GET /api/fallback */
export async function fallbackUsingGet(options?: { [key: string]: any }) {
  return request<string>('/api/fallback', {
    method: 'GET',
    ...(options || {}),
  });
}

/** fallback PUT /api/fallback */
export async function fallbackUsingPut(options?: { [key: string]: any }) {
  return request<string>('/api/fallback', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** fallback POST /api/fallback */
export async function fallbackUsingPost(options?: { [key: string]: any }) {
  return request<string>('/api/fallback', {
    method: 'POST',
    ...(options || {}),
  });
}

/** fallback DELETE /api/fallback */
export async function fallbackUsingDelete(options?: { [key: string]: any }) {
  return request<string>('/api/fallback', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** fallback PATCH /api/fallback */
export async function fallbackUsingPatch(options?: { [key: string]: any }) {
  return request<string>('/api/fallback', {
    method: 'PATCH',
    ...(options || {}),
  });
}
