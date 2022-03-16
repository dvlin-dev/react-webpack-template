import { BarsOutlined } from '@ant-design/icons';

export default [
  {
    path: 'knowledege',
    meta: {
      title: '知识库',
      icon: <BarsOutlined />,
    },
    children: [
      {
        path: 'articles',
        component: () =>
          import(/* webpackChunkName: "articles" */ '@/pages/nest/nest1/nest11/index'),
        meta: {
          title: '文章',
        },
      },
      {
        path: 'searches',
        component: () =>
          import(/* webpackChunkName: "searches" */ '@/pages/nest/nest1/nest12/index'),
        meta: {
          title: '搜索',
        },
      },
      {
        path: 'feedback',
        component: () =>
          import(/* webpackChunkName: "feedback" */ '@/pages/nest/nest1/nest12/index'),
        meta: {
          title: '反馈',
        },
      },
    ],
  },
];
