import { BarsOutlined } from '@ant-design/icons';

export default [
  {
    path: 'message',
    meta: {
      title: '活动聊天',
      icon: <BarsOutlined />,
    },
    component: () => import(/* webpackChunkName: "message" */ '@/pages/nest/nest1/nest11/index'),
  },
];
