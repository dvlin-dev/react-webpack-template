export interface RegisterForm {
  name: string;
  phone?: string;
  email?: string;
  password: string;
  code: any;
}
export interface LoginForm {
  password: string;
  login: string | number;
}
