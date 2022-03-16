import { createSlice } from '@reduxjs/toolkit';

interface Message {
  id: number;
  logo?: string;
  message: string;
  name?: string;
}
const initialState: Array<Message> = [];
export const msgSlice = createSlice({
  name: 'msg',
  initialState,
  reducers: {
    setMsg(state, action) {
      state.unshift(action.payload);
      // TODO why return
      return state;
    },
  },
});

export const { setMsg } = msgSlice.actions;
export default msgSlice.reducer;
