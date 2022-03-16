import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from './store';
import { FullPageLoading } from './components/lib';
import App from './App';

const queryClient = new QueryClient();
ReactDOM.render(
  // <React.StrictMode>
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
