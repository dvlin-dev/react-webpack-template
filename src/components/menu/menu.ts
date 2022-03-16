import { PieChartOutlined, UserOutlined, AppstoreAddOutlined } from '@ant-design/icons';

export interface MenuType {
  key: string;
  title: string;
  icon: any;
  children?: MenuType[];
}
const menu: MenuType[] = [
  {
    key: '/admin/welcome',
    title: '首页',
    icon: PieChartOutlined,
  },
  {
    key: '/admin/subject',
    title: '项目管理',
    icon: AppstoreAddOutlined,
  },
  {
    key: '/admin/manage',
    title: '人员管理',
    icon: UserOutlined,
    children: [
      {
        key: '/admin/manage/user',
        title: '普通用户',
        icon: UserOutlined,
      },
      {
        key: '/admin/manage/admin',
        title: '管理员',
        icon: UserOutlined,
      },
    ],
  },
  {
    key: '/admin/account',
    title: '账号设置',
    icon: UserOutlined,
    children: [
      {
        key: '/admin/account/center',
        title: '个人中心',
        icon: UserOutlined,
      },
      {
        key: '/admin/account/settings',
        title: '个人设置',
        icon: UserOutlined,
      },
    ],
  },
];
export default menu;
