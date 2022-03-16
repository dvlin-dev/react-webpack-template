import { createSlice } from '@reduxjs/toolkit';

export const sidebareSlice = createSlice({
  name: 'sidebar',
  initialState: {
    sideBarCollapsed: window.localStorage.getItem('sideBarCollapsed') === 'true' || false,
  },
  reducers: {
    setSideBarCollapsed(state, { payload }) {
      state.sideBarCollapsed = payload;
      window.localStorage.setItem('sideBarCollapsed', `${state.sideBarCollapsed}`);
    },
  },
});

export default sidebareSlice.reducer;
export const { setSideBarCollapsed } = sidebareSlice.actions;
