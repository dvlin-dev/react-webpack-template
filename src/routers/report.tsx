import { BarsOutlined } from '@ant-design/icons';

export default [
  {
    path: 'report',
    meta: {
      title: '报告',
      icon: <BarsOutlined />,
    },
    children: [
      {
        path: 'chatnumber',
        component: () =>
          import(/* webpackChunkName: "chatnumber" */ '@/pages/nest/nest1/nest11/index'),
        meta: {
          title: '会话数量',
        },
      },
      {
        path: 'missed',
        component: () => import(/* webpackChunkName: "missed" */ '@/pages/nest/nest1/nest12/index'),
        meta: {
          title: '错过的会话',
        },
      },
      {
        path: 'leavemessage',
        component: () =>
          import(/* webpackChunkName: "leavemessage" */ '@/pages/nest/nest1/nest12/index'),
        meta: {
          title: '留言',
        },
      },
      {
        path: 'usersatisfaction',
        component: () =>
          import(/* webpackChunkName: "usersatisfaction" */ '@/pages/nest/nest1/nest12/index'),
        meta: {
          title: '用户满意度',
        },
      },
    ],
  },
];
