import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Subject } from '@/types/subject';

interface State {
  logo: string | undefined;
  projectModalOpen: boolean;
  subjects: Subject[];
  name: string | number | readonly string[] | undefined;
  modalModel: null;
}
const initialState: State = {
  logo: undefined,
  projectModalOpen: false,
  subjects: [],
  name: undefined,
  modalModel: null,
};

export const subjectSlice = createSlice({
  name: 'subjectSlice',
  initialState,
  reducers: {
    openProjectModal(state, action) {
      state.projectModalOpen = true;
      state.modalModel = action.payload;
    },
    closeProjectModal(state) {
      state.projectModalOpen = false;
      state.logo = undefined;
      state.name = undefined;
    },
    setProjectList(state, action: PayloadAction<Subject[]>) {
      state.subjects = action.payload;
    },
    setLogo(state, action) {
      state.logo = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
  },
});
export const { openProjectModal, closeProjectModal, setProjectList, setLogo, setName } =
  subjectSlice.actions;

export default subjectSlice.reducer;
