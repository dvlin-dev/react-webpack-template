import { BarsOutlined } from '@ant-design/icons';

export default [
  {
    path: 'user',
    meta: {
      title: '人员管理',
      icon: <BarsOutlined />,
    },
    children: [
      {
        path: 'setting',
        component: () =>
          import(/* webpackChunkName: "usersetting" */ '@/pages/nest/nest1/nest11/index'),
        meta: {
          title: '成员设置',
        },
      },
      {
        path: 'department',
        component: () =>
          import(/* webpackChunkName: "userdepartment" */ '@/pages/nest/nest1/nest12/index'),
        meta: {
          title: '部门',
        },
      },
      {
        path: 'userblacklist',
        component: () =>
          import(/* webpackChunkName: "userblacklist" */ '@/pages/nest/nest1/nest12/index'),
        meta: {
          title: '黑名单',
        },
      },
    ],
  },
];
