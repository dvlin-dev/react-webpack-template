/*
 * @Description: 侧边栏
 */
import './sideBar.less';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '@/routers';
import { useAppSelector } from '@/hooks/store';

const { Sider } = Layout;
const { SubMenu } = Menu;

function SideBar() {
  const sideBarCollapsed = useAppSelector(state => state.sider.sideBarCollapsed);

  const location = useLocation();
  const { pathname } = location;

  /**
   * 根据路由配置自动生成侧边菜单
   */
  const openKeys: string[] = []; // 用于根据当前路由默认展开子菜单
  // 递归获取层级菜单
  function getMenuList() {
    /**
     *
     * @param routeList 递归列表
     * @param prePath 路由前缀
     * @returns 路由列表
     */
    const getList = (routeList: any[] = [], prePath = '') => {
      let menuList: any[] = [];
      // 遍历路由
      routeList.forEach(v => {
        v.meta = v.meta || {};
        // 排除不需要显示菜单的路由
        if (v.redirect || v.path === '*' || v.meta.hideMenu) {
          return;
        }
        // 排除没有访问权限的路由
        // if (!getIsCanAccess(v.meta.accessId)) {
        //   return
        // }

        // 主路由名字 admin
        if (v.path === '/admin') {
          menuList = menuList.concat(getList(v.children, '/admin/'));
        } else if (v.path !== undefined) {
          const currentPath = prePath + v.path;
          if (v.children) {
            // 有嵌套路由，递归添加菜单
            menuList.push(
              <SubMenu key={currentPath} title={v.meta.title} icon={v.meta.icon}>
                {getList(v.children, `${currentPath}/`)}
              </SubMenu>,
            );
            if (pathname.match(new RegExp(`^${currentPath}\\/\\w`))) {
              openKeys.push(currentPath);
            }
          } else {
            // 无嵌套路由，菜单添加结束
            menuList.push(
              <Menu.Item key={currentPath} icon={v.meta.icon}>
                {/* icon={<v.meta.icon />} */}
                <Link to={currentPath}>{v.meta.title}</Link>
              </Menu.Item>,
            );
          }
        } else if (v.url) {
          // 外部URL
          menuList.push(
            <Menu.Item key={prePath + v.url} icon={v.meta.icon}>
              <a href={v.url} target="_blank" rel="noreferrer">
                {v.meta.title}
              </a>
            </Menu.Item>,
          );
        }
      });
      return menuList;
    };
    return getList(routes);
  }
  const menuList = getMenuList();
  return (
    <div className="c-Layout-sideBar">
      <Layout className="sideBarLayout">
        <Sider trigger={null} collapsible collapsed={sideBarCollapsed} collapsedWidth="50">
          <Link to="/admin">
            <div className="logoWrap">
              <i className="logo" />
              {!sideBarCollapsed ? <h1 className="title">后台管理系统</h1> : null}
            </div>
          </Link>

          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[pathname]}
            defaultOpenKeys={sideBarCollapsed ? [] : openKeys}
          >
            {menuList}
          </Menu>
        </Sider>
      </Layout>
    </div>
  );
}

export default SideBar;
