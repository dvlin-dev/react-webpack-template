/**
 * 后端采用CSRF，登录状态前端不用管理
 */
import { LoginForm, RegisterForm } from '@/types/authForm';
import http from '../utils/http';

export function getInfo() {
  return http('/members/info');
}
export function login(values: LoginForm) {
  return http({
    url: '/members/login',
    method: 'post',
    data: values,
  });
}
export function register(values: RegisterForm) {
  return http({
    url: 'members/register',
    method: 'post',
    data: values,
  });
}
