import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/store/auth.slice';
import sideReducer from './sidebar.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sider: sideReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
