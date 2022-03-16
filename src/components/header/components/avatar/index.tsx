import { Avatar, Dropdown, Menu, message } from 'antd';
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import './index.less';

const onClick = ({ key }: any) => {
  message.info(`Click on item ${key}`);
};
const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="0" className="menu-item">
      <UserOutlined className="menu-item-icon" />
      个人中心
    </Menu.Item>
    <Menu.Item key="1" className="menu-item">
      <SettingOutlined className="menu-item-icon" />
      个人设置
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" className="menu-item">
      <LogoutOutlined className="menu-item-icon" />
      退出登录
    </Menu.Item>
  </Menu>
);
function AvatarD() {
  return (
    <Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
      <Avatar style={{ height: '24px' }} src="https://joeschmoe.io/api/v1/random" />
    </Dropdown>
  );
}

export default AvatarD;
