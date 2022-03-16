import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { ReactCompType, MetaType, OnRouteBeforeType, OnRouteBeforeResType } from '../types';
import utils from '../utils';

let temp: ReactCompType | null = null;

function Guard({
  element,
  meta,
  onRouteBefore,
}: {
  element: ReactCompType;
  meta: MetaType;
  onRouteBefore?: OnRouteBeforeType;
}) {
  // eslint-disable-next-line no-param-reassign
  meta = meta || {};

  const location = useLocation();
  const { pathname } = location;

  const navigate = useNavigate();

  if (onRouteBefore) {
    if (temp === element) {
      return element;
    }
    const pathRes = onRouteBefore({ pathname, meta });
    if (utils.getDataType(pathRes) === 'Promise') {
      (pathRes as Promise<OnRouteBeforeResType>).then((res: OnRouteBeforeResType) => {
        if (res && res !== pathname) {
          navigate(res, { replace: true });
        }
      });
    } else if (pathRes && pathRes !== pathname) {
      // eslint-disable-next-line no-param-reassign
      element = <Navigate to={pathRes as string} replace />;
    }
  }

  temp = element;
  return element;
}

export default Guard;
