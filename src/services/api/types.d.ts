declare namespace SendRequest {
  type SendToGateway = {
    interfaceInfo?: API.InterfaceInfo;
    userInfo?: API.UserVO;
    userRequestParams?: string;
    params?: any;
  };
}
