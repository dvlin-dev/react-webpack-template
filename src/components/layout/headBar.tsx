/*
 * @Description: 顶部栏
 */
import './headBar.less';
import { MenuFoldOutlined, MenuUnfoldOutlined, DownOutlined } from '@ant-design/icons';
import { Breadcrumb, Menu, Dropdown } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
// import { getRouteMetaMap } from '@/utils/appTools';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { setSideBarCollapsed } from '@/store/sidebar.slice';
import { setTicket } from '@/store/auth.slice';

function HeadBar() {
  const sideBarCollapsed = useAppSelector(state => state.sider.sideBarCollapsed);
  const dispath = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  // const name = useAppSelector(state => state.auth.user.name) || '';
  function onToggle() {
    dispath(setSideBarCollapsed(!sideBarCollapsed));
  }

  /**
   * 面包屑
   */
  // const routeMetaMap = getRouteMetaMap();
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>{/* <span>{routeMetaMap[url].title}</span> */}</Breadcrumb.Item>
    );
  });

  function toPageHome() {
    navigate('/index');
  }

  function onLogout() {
    setTicket('');
    navigate('/login');
  }

  return (
    <div className="c-Layout-headBar">
      <div className="headLeft">
        {/* 侧边栏折叠按钮 */}
        <div className="toggleIcon" onClick={onToggle} onKeyDown={onToggle}>
          {sideBarCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
        {/* 面包屑导航 */}
        <Breadcrumb>{extraBreadcrumbItems}</Breadcrumb>
      </div>

      <div className="headRight">
        <Dropdown
          className="userMenu"
          overlay={
            <Menu>
              <Menu.Item key="0">
                <div onClick={toPageHome} onKeyDown={onToggle}>
                  首页
                </div>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key="3">
                <div className="logout" onClick={onLogout} onKeyDown={onToggle}>
                  退出
                </div>
              </Menu.Item>
            </Menu>
          }
        >
          <div>
            {/* {name || ''} */}
            <DownOutlined className="iconArrowDown" />
          </div>
        </Dropdown>
      </div>
    </div>
  );
}

export default HeadBar;
