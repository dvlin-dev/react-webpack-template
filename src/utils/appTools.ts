import { routes } from '@/routers';

/**
 * 获取路由路径和路由meta字段的映射数据
 */
function getRouteMetaMap() {
  const getMap = (routeList: any[] = [], prePath = '') => {
    let map = {};
    routeList.forEach(v => {
      v.meta = v.meta || {};
      if (v.redirect || v.path === '*') {
        return;
      }
      let currentPath = prePath + v.path;
      if (v.path === '/') {
        currentPath = '';
      } else {
        map = {
          ...map,
          [currentPath]: v.meta || {},
        };
      }
      if (v.children) {
        map = {
          ...map,
          ...getMap(v.children, `${currentPath}/`),
        };
      }
    });
    return map;
  };
  return getMap(routes);
}

export {
  // eslint-disable-next-line import/prefer-default-export
  getRouteMetaMap,
};
