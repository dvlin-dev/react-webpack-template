import { useState } from 'react';
import { Dropdown, Badge, Tabs, Avatar, Divider } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import './index.less';

const { TabPane } = Tabs;

function callback(key: any) {
  console.log(key);
}
const message = [
  {
    msg: '你收到了14份周报',
    id: '213321',
  },
  {
    msg: '你收到了14份周报',
    id: '321',
  },
  {
    msg: '你收到了14份周报',
    id: '231412',
  },
];
function MessageList() {
  return (
    <Tabs defaultActiveKey="1" onChange={callback} centered>
      <TabPane tab="通知" key="1">
        {message.map(item => (
          <li key={item.id}>
            <Avatar src="https://joeschmoe.io/api/v1/random" />
            {item.msg}
            <Divider />
          </li>
        ))}
      </TabPane>
      <TabPane tab="消息" key="2">
        消息
      </TabPane>
      <TabPane tab="代办" key="3">
        代办
      </TabPane>
    </Tabs>
  );
}
const menu = (
  <div className="notice-card">
    <MessageList />
    <div>qingqingqing</div>
  </div>
);
function Notice() {
  const [visible, setVisible] = useState(false);
  const handleVisibleChange = (e: any) => {
    if (!e) {
      setVisible(false);
    }
  };
  return (
    <Dropdown
      overlay={menu}
      placement="bottomLeft"
      trigger={['click']}
      onVisibleChange={handleVisibleChange}
      visible={visible}
    >
      <Badge count={5} size="small">
        <BellOutlined style={{ fontSize: '16px' }} onClick={() => setVisible(p => !p)} />
      </Badge>
    </Dropdown>
  );
}
export default Notice;
