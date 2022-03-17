import { getInfo } from '@/api/user';
import PageLayout from '@/components/layout';
import { HomeOutlined, GithubOutlined, BarsOutlined } from '@ant-design/icons'; // meta.icon设置菜单图标，仅设置一级菜单即可
import { isGotUserInfo, isLogin, setUser } from '@/store/auth.slice';
// 导入模块路由
import report from './report';
import message from './message';
import knowledege from './knowledege';
import user from './user';

/**
 * @description: 全局路由配置
 * meta字段说明：↓↓↓
 * @param {string} title // 路由页面标题，以及侧边栏菜单中的标题
 * @param {element} icon // 侧边栏该路由菜单显示的图标
 * @param {string} accessId // 路由页面权限id
 * @param {boolean} noLogin // 路由页面是否需要登录访问
 * @param {boolean} hideMenu // 是否在侧边栏中隐藏该路由菜单
 */
const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "homepage" */ '@/pages/home/index'),
    meta: {
      title: '云信客服',
      noLogin: true,
      hideMenu: true,
    },
  },
  {
    path: '/chat',
    component: () => import(/* webpackChunkName: "homepage" */ '@/pages/chat/index'),
    meta: {
      title: '聊天页-云信客服',
      noLogin: true,
      hideMenu: true,
    },
  },
  {
    path: '/admin',
    redirect: '/admin/dashboard',
  },
  {
    path: '/admin',
    element: <PageLayout />,
    children: [
      {
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/pages/index/index'),
        meta: {
          title: '首页',
          icon: <HomeOutlined />,
          accessId: '10000',
        },
      },
      {
        path: 'monitoring',
        component: () =>
          import(/* webpackChunkName: "monitoring" */ '@/pages/unauthenticated/login/index'),
        meta: {
          title: '监控',
          noLogin: true,
          icon: <BarsOutlined />,
        },
      },
      ...message,
      ...user,
      ...report,
      ...knowledege,
    ],
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/pages/unauthenticated/login/index'),
    meta: {
      title: '登录',
      noLogin: true,
      hideMenu: true,
    },
  },
  {
    path: '/register',
    component: () => import(/* webpackChunkName: "register" */ '@/pages/unauthenticated/register'),
    meta: {
      title: '登录',
      noLogin: true,
      hideMenu: true,
    },
  },
  {
    path: '/403',
    component: () => import(/* webpackChunkName: "errorPage3" */ '@/pages/errorPage/page403'),
    meta: {
      title: '403',
      noLogin: true,
      hideMenu: true,
    },
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "errorPage4" */ '@/pages/errorPage/page404'),
    meta: {
      title: '404',
      noLogin: true,
      hideMenu: true,
    },
  },
  {
    url: 'https://github.com/bowlingQ/cloud-courier-customer-service',
    meta: {
      title: 'GitHub',
      noLogin: true,
      icon: <GithubOutlined />,
    },
  },
];

/**
 * @description: 全局路由拦截
 * @param {string} pathname 当前路由路径
 * @param {object} meta 当前路由自定义meta字段
 * @return {string} 需要跳转到其他页时就return一个该页的path路径
 */
// eslint-disable-next-line consistent-return
const onRouteBefore = ({ meta }: any) => {
  // 动态修改页面title
  if (meta.title !== undefined) {
    document.title = meta.title;
  }

  // 登录及权限判断
  if (!meta.noLogin) {
    // 路由是否需要登录
    if (isLogin) {
      // 用户是否已登录
      // const { accessId } = meta;
      // const message = `${pathname},${meta.title || ''}`;
      // const path403 = `/403?message=${encodeURIComponent(message)}`;

      if (!isGotUserInfo) {
        // 是否已获取到用户（权限）信息
        return new Promise(() => {
          getInfo().then((res: { data: {} }) => {
            const data = res.data || {};
            setUser(data);

            // TODO 权限判断
            // if (!getIsCanAccess(accessId)) {
            //   resolve(path403);
            // }
          });
        });
      }
      // if (!getIsCanAccess(accessId)) {
      //   return path403;
      // }
    } else {
      return `/login?redirectUrl=${encodeURIComponent(window.location.href)}`;
    }
  }
};

export { routes, onRouteBefore };
