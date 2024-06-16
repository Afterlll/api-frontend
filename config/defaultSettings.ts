import {ProLayoutProps} from '@ant-design/pro-components';
// {
//   "navTheme": "light",
//   "colorPrimary": "#1677FF",
//   "layout": "top",
//   "contentWidth": "Fixed",
//   "fixedHeader": true,
//   "fixSiderbar": true,
//   "splitMenus": false,
//   "pwa": false
// }
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
  navTheme?: string
} = {
  navTheme: 'light',
  colorPrimary: "#1677FF",
  layout: 'top',
  contentWidth: 'Fixed',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  splitMenus: false,
  title: '江喜原-API 接口开放平台',
  pwa: false,
  // logo: 'https://img.qimuu.icu/typory/logo.gif',
  iconfontUrl: 'https://img.qimuu.icu/typory/logo.gif',
};
export default Settings;
