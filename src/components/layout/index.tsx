import './index.less';
import { Outlet } from 'react-router-dom';
import HeadBar from './headBar';
import SideBar from './sideBar';

function PageLayout() {
  return (
    <div className="c-Layout-index">
      <SideBar />

      <div className="appMainWrap">
        <HeadBar />

        <div className="appMain">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default PageLayout;
