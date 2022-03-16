import { UserOutlined, LockOutlined, SendOutlined, CloudOutlined } from '@ant-design/icons';
import { RegisterForm } from '@/types/authForm';
import { Button, Form, Input, message } from 'antd';
import { useMutation } from 'react-query';
import { login as loginApi, register } from '@/api/user';
import { useNavigate } from 'react-router-dom';
import '../login/index.less';

function RegisterScreen() {
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation((values: RegisterForm) => register(values), {
    onMutate: variables =>
      // 修改即将发生！
      variables,
    onError: () => {
      // 错误触发！
      console.log(`error`);
    },
    onSuccess: (data, variables, context: any) => {
      message.success('注册成功');
      // console.log(context)
      console.log(data);
      const { phone, email, password } = context;
      const login = phone || email;
      loginApi({ login, password })
        .then(() => {
          navigate('/admin/welcome');
        })
        .catch(err => {
          message.error(err);
        });
      // login()
    },
    onSettled: () => {
      // 错误或成功……这并不重要
    },
  });

  // HTMLFormElement extends Element
  const handleSubmit = async ({ ...values }: any) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { phone_email, name, password, code } = values;
    const phoneReg = /^((\+|00)86)?1\d{10}$/;
    const emailReg =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (phoneReg.test(phone_email)) {
      const phone = phone_email;
      mutate({ phone, name, password, code });
    } else if (emailReg.test(phone_email)) {
      const email = phone_email;
      mutate({ email, name, password, code });
    } else {
      message.warning('请输入正确格式');
    }
  };

  return (
    <div className="Bacground">
      <div className="Card">
        <header style={{ textAlign: 'center' }}>
          <h2>注册</h2>
        </header>
        <Form onFinish={handleSubmit}>
          <Form.Item name="name" rules={[{ required: true, message: '请输入用户名' }]}>
            <Input
              placeholder="用户名"
              type="text"
              id="name"
              size="large"
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item name="phone_email" rules={[{ required: true, message: '请输入手机号或邮箱' }]}>
            <Input
              placeholder="请输入手机号或邮箱"
              type="text"
              id="phone_email"
              size="large"
              prefix={<CloudOutlined />}
            />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
            <Input
              placeholder="密码"
              type="password"
              id="password"
              size="large"
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Form.Item name="code" rules={[{ required: true, message: '请输入验证码' }]}>
            <div className="SmsContain">
              <Input
                prefix={<SendOutlined />}
                size="large"
                placeholder="验证码"
                id="code"
                value="0000"
              />
              <Button size="large" style={{ marginLeft: '10px' }}>
                发送验证码
              </Button>
            </div>
          </Form.Item>
          <Button className="LongButton" loading={isLoading} htmlType="submit" type="primary">
            注册
          </Button>
        </Form>
      </div>
    </div>
  );
}
export default RegisterScreen;
