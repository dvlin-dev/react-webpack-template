import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/store/auth.slice';
import subjectReducer from './subject.slice';
import msgReducer from './message.slice';
import sideReducer from './sidebar.slice';
// import {connectionSlice} from "./connection.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    subject: subjectReducer,
    msg: msgReducer,
    sider: sideReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
