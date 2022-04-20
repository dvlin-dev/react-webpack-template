import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { FullPageLoading } from './components/lib';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
const queryClient = new QueryClient();
ReactDOM.render(
  // <React.StrictMode> ant 在严格模式下会报错
  <Suspense fallback={<FullPageLoading />}>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </Suspense>,
  // </React.StrictMode>,
  document.getElementById('root'),
);

// 业务组件仅供参考，不建议使用，
