import { useRoutes } from 'react-router-dom';
import Fn from './fn';
import { RouterWaiterPropsType } from '../types';

function RouterWaiter({ routes, onRouteBefore, loading }: RouterWaiterPropsType) {
  const fn = new Fn({
    routes,
    onRouteBefore,
    loading,
  });
  const reactRoutes = fn.transformRoutes();
  const elements = useRoutes(reactRoutes);
  return elements;
}
export default RouterWaiter;
