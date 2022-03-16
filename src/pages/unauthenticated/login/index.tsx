import { Button, Form, Input, Tabs } from 'antd';
import { UserOutlined, LockOutlined, SendOutlined } from '@ant-design/icons';
import { useMutation } from 'react-query';
import { LoginForm } from '@/types/authForm';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '@/api/user';
import './index.less';

const { TabPane } = Tabs;

// eslint-disable-next-line react/function-component-definition
const Login = () => {
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation((values: LoginForm) => login(values), {
    onMutate: () => {
      // 修改即将发生！
      // return { }
    },
    onError: () => {
      // 错误触发！
      console.log(`error`);
    },
    onSuccess: () => {
      console.log('login');
      navigate('admin/welcome');
      //
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSettled: (_data, error, variables, context) => {
      // 错误或成功……这并不重要
    },
  });

  const handleSubmit = async (values: { login: number; password: string }) => {
    mutate(values);
  };

  // TODO 短信登录和密码登录分为两个模块
  return (
    <div className="Bacground">
      <div className="Card">
        <header style={{ textAlign: 'center' }}>
          <h2>云信客服</h2>
        </header>
        <div>
          <Tabs centered defaultActiveKey="account">
            <TabPane tab="账号密码登录" key="account">
              <Form onFinish={handleSubmit}>
                <Form.Item name="login" rules={[{ required: true, message: '请输入手机号或邮箱' }]}>
                  <Input
                    placeholder="请输入手机号或邮箱"
                    type="text"
                    id="login"
                    size="large"
                    prefix={<UserOutlined />}
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
                <Form.Item>
                  <Button loading={isLoading} htmlType="submit" type="primary" block>
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
            <TabPane tab="手机号登录" key="sms">
              <Form onFinish={handleSubmit}>
                <Form.Item name="login" rules={[{ required: true, message: '请输入手机号' }]}>
                  <Input
                    placeholder="手机号"
                    type="text"
                    id="login"
                    size="large"
                    prefix={<UserOutlined />}
                  />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: '请输入验证码' }]}>
                  <div className="SmsContain">
                    <Input prefix={<SendOutlined />} size="large" placeholder="验证码" />
                    <Button size="large" style={{ marginLeft: '10px' }}>
                      发送验证码
                    </Button>
                  </div>
                </Form.Item>
                <Form.Item>
                  <Button loading={isLoading} htmlType="submit" type="primary" block>
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
          </Tabs>
        </div>
        <div className="TipsLine">
          <Button type="link">忘记密码</Button>
          <Button type="link">
            <Link to="/register">立即注册</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
