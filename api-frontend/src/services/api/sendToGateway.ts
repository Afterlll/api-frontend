// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';
import {useModel} from "@@/exports";
// const {initialState} = useModel('@@initialState');
//
async function sha256Hash(body: string, secretKey: string) {
  // 构建待哈希的字符串
  const content = body + '.' + secretKey;

  // 将字符串转换为Uint8Array，因为SubtleCrypto要求此格式的输入
  const encoder = new TextEncoder();
  const data = encoder.encode(content);

  // 使用SubtleCrypto进行SHA-256哈希计算
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);

  // 将Buffer转换为十六进制字符串表示的哈希值
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  return hashHex;
}

// // todo 需要修改为自己的
const accessKey = 'jxy'
// const sign = String(sha256Hash(`${initialState?.loginUser?.id}`, accessKey))

/** 发送请求到网关 GET */
export async function sendRequestToGatewayUsingGet (
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  info: SendRequest.SendToGteway,
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
      'accessKey' : accessKey,
      // 'nonce' : Math.floor(Math.random() * 100001),
      // 'timestamp' : Math.floor(Date.now() / 1000),
      // 'body' : `${initialState?.loginUser?.id}`,
      // 'sign' : sign
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
      'accessKey' : accessKey,
      // 'nonce' : Math.floor(Math.random() * 100001),
      // 'timestamp' : Math.floor(Date.now() / 1000),
      // 'body' : `${initialState?.loginUser?.id}`,
      // 'sign' : sign
    },
    data: info?.params,
    ...(options || {}),
  });
}
