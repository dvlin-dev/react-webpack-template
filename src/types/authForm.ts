export interface RegisterForm {
  name: string;
  phone?: string;
  email?: string;
  password: string;
  code: any;
}
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface LoginForm {
  password: string;
  login: string | number;
}
