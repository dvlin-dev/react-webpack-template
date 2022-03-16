import { useState, useEffect, useCallback } from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import menuData from './menu';
import { MenuType } from './menu';

function MenuElem() {
  const localtion = useLocation();
  const defaultKey = localtion.pathname;
  const keyArray = localtion.pathname.split('/');
  const defaultOpenKey = keyArray.reduce((p, c, index, arr) => {
    if (c !== '' && index + 1 < arr.length) {
      return `${p}/${c}`;
    }
    return p;
  });
  const [selectedKey, changeSelectedKey] = useState([defaultOpenKey]);
  const changeSelected = (value: string[]) => {
    changeSelectedKey(value);
  };
  const [menu, setMenu] = useState(['']);
  const { SubMenu } = Menu;
  // 生产元素
  const initMenu: any = useCallback((list: MenuType[]) => {
    // 定义生产元素的方法
    list.map(item => {
      if (item.children) {
        return (
          <SubMenu key={item.key} title={item.title} icon={<item.icon />}>
            {initMenu(item.children as MenuType[])}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={item.key} icon={<item.icon />}>
          <Link to={item.key}>{item.title}</Link>
        </Menu.Item>
      );
    });
  }, []);
  useEffect(() => {
    setMenu(initMenu(menuData));
  }, []);
  return (
    <Menu
      mode="inline"
      defaultOpenKeys={[defaultOpenKey]}
      defaultSelectedKeys={[defaultKey]}
      openKeys={selectedKey}
      onOpenChange={changeSelected}
    >
      {menu}
    </Menu>
  );
}
export default MenuElem;
