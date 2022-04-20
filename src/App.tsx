import { HashRouter } from 'react-router-dom'; // 引入官方路由组件
import RouterWaiter from '@/routers/utils'; // 引入该插件
import { routes } from '@/routers'; // 引入你的路由配置
import onRouteBefore from '@/routers/utils/onRouteBefore'; // 引入你定义的路由拦截函数
import 'antd/dist/antd.css';
import '@/assets/css/reset.scss';

function App() {
  return (
    <HashRouter>
      <RouterWaiter routes={routes} onRouteBefore={onRouteBefore} />
    </HashRouter>
  );
}

export default App;
