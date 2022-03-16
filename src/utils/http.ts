import axios from 'axios';

const http = axios.create({
  baseURL: 'https://cccs.sunxinao.cn',
  // timeout: 5000, // request timeout
  withCredentials: true,
});

http.interceptors.request.use(
  config => {
    // eslint-disable-next-line no-param-reassign
    config.withCredentials = true;
    return config;
  },
  error => Promise.reject(error),
);

// 添加响应拦截器
http.interceptors.response.use(
  response =>
    // console.log(response.headers['set-cookie'])
    response,
  async error => Promise.reject(error),
);
export default http;
