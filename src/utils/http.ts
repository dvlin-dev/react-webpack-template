import axios from 'axios';
import { message } from 'antd';
const http = axios.create({
  baseURL: 'https://xxx.cn',
  // timeout: 5000, // request timeout
  withCredentials: true,
});

http.interceptors.request.use(
  config => {
    return config;
  },
  error => Promise.reject(error),
);

http.interceptors.response.use(
  response => response,
  err => {
    const { response } = err;
    message.error(response.data.message);
  },
);
export default http;
