// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 发送请求到网关 GET */
export async function sendRequestToGatewayUsingGet (
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  info: SendRequest.SendToGateway,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseInterfaceInfo>(`${info.interfaceInfo?.uri}`, {
    method: 'GET',
    params: {
      ...info?.params,
    },
    headers: {
      'Content-Type': 'application/json',
      'userId': `${info.userInfo?.id}`,
      'interfaceId': `${info.interfaceInfo?.id}`,
      // 'accessKey' : '1',
      // 'nonce' : '',
      // 'timestamp' : '',
      // '' : '',
      // '' : ''
    },
    ...(options || {}),
  });
}

/** 发送请求到网关 POST */
export async function sendRequestToGatewayUsingPost (
  info: SendRequest.SendToGateway,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseobject>(`${info.interfaceInfo?.uri}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'userId': `${info.userInfo?.id}`,
      'interfaceId': `${info.interfaceInfo?.id}`,
      // 'accessKey' : '1',
      // 'nonce' : '',
      // 'timestamp' : '',
      // '' : '',
      // '' : ''
    },
    data: info.interfaceInfo?.id,
    ...(options || {}),
  });
}
