export interface RouterType {
  path: string;
  component: React.LazyExoticComponent<any>;
  // 子路由
  routes?: Array<RouterType>;
  notExect?: boolean;
  exact?: boolean;
  // 302 跳转
  redirect?: any;
  // 路由信息
  meta?: {
    title: string;
  };
  auth?: string;
}

export interface IRouterPage {
  /**
   * 页面组件
   *
   * @type {any}
   * @memberof IRouterPage
   */
  component?: any;
  /**
   * 当前路由路径
   */
  path: string;
  /**
   * 是否严格匹配路由
   */
  exact?: boolean;
  /**
   * 动态加载路由时的提示文案
   */
  loadingFallback?: string;
}
