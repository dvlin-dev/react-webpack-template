import { User } from '@/types/user';
import { createSlice } from '@reduxjs/toolkit';
import { RegisterForm, LoginForm } from '@/types/authForm';
import { AppDispatch, RootState } from '@/store/index';
import * as auth from '@/api/user';

interface State {
  user: User | null;
  ticket: string;
}

const initialState: State = {
  user: null,
  ticket: window.localStorage.getItem('ticket') || '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.user = action.payload;
    },
    setTicket(state, { payload }) {
      state.ticket = payload;
      window.localStorage.setItem('ticket', state.ticket);
    },
  },
});

export default authSlice.reducer;

export const { setUser, setTicket } = authSlice.actions;

export const login = (form: LoginForm) => (dispatch: AppDispatch) =>
  auth.login(form).then(user => dispatch(setUser(user)));
export const register = (form: RegisterForm) => (dispatch: AppDispatch) =>
  auth.register(form).then(user => dispatch(setUser(user)));
export const isLogin = (state: RootState) => !!state.auth.ticket;
export const isGotUserInfo = (state: RootState) => !!state.auth.user.id;
