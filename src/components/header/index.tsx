import { Layout } from 'antd';
import Avatar from './components/avatar';
import Notice from './components/notice';
import './index.less';

const { Header } = Layout;
const header = () => (
  <Header className="site-layout-background" style={{ padding: 0, height: '48px' }}>
    <div className="header-bar">
      <Notice />
      <Avatar />
    </div>
  </Header>
);

export default header;
