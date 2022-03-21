import axios, { AxiosRequestConfig } from 'axios';
import { message } from 'antd';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface myAxiosRequestConfig extends AxiosRequestConfig {
  headers?: any;
}
axios.defaults.baseURL = 'https://xxx.cn';
// 请求拦截
let msg: Object = '';
axios.interceptors.request.use(
  (config: myAxiosRequestConfig) => {
    if (config.url !== 'oauth/token') {
      // config.headers.authorization =
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !msg && (msg = message.loading('光速加载中', 0));
    // eslint-disable-next-line no-param-reassign
    config.withCredentials = true;
    return config;
  },
  err => {
    setTimeout(() => {
      message.destroy();
      msg = '';
    }, 1000);
    return Promise.reject(err);
  },
);
// 响应拦截
axios.interceptors.response.use(
  reponse => {
    setTimeout(() => {
      message.destroy();
      msg = '';
    }, 1000);
    console.log(reponse.headers['set-cookie']);
    return reponse;
  },
  err => {
    setTimeout(() => {
      message.destroy();
      msg = '';
    }, 1000);
    const { response } = err;
    const errormsg = '';
    if (response) {
      // 服务器有返回内容
      // switch (response.status) {
      //   case 400:
      //     errormsg = '参数错误'
      //     break
      //   case 401:
      //     errormsg = '未登录,请重新登录'
      //     window.location.href = '/login'
      //     break
      //   case 403:
      //     errormsg = '登录过期或权限不足'
      //     break
      //   case 404:
      //     window.location.href = '/error'
      //     errormsg = '找不到网页'
      //     break
      //   case 405:
      //     errormsg = '请求方法未允许'
      //     break
      //   case 408:
      //     errormsg = '请求超时'
      //     break
      //   case 500:
      //     errormsg = '服务异常'
      //     break
      //   case 501:
      //     errormsg = '网络未实现'
      //     break
      //   case 502:
      //     errormsg = '网络错误'
      //     break
      //   case 503:
      //     errormsg = '服务不可用'
      //     break
      //   case 504:
      //     errormsg = '网络超时'
      //     break
      //   case 505:
      //     errormsg = 'http版本不支持该请求'
      //     break
      //   default:
      //     errormsg = '连接错误'
      // }
      message.error(errormsg, 2500);
    } else {
      // 服务器连结果都没有返回  有可能是断网或者服务器奔溃
      // if (!window.navigator.onLine) {
      //   // 断网处理
      //   window.location.href = '/error'
      //   // router.push('/error')
      // } else {
      //   window.location.href = '/error'
      // }
    }
    return Promise.reject(err);
  },
);
export default axios;
