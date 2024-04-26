import { createSlice } from '@reduxjs/toolkit';
import { actions } from '../../constants';
import { modalInitialState } from '../../constants';

const modalSlice = createSlice({
  name: 'modal',
  initialState: modalInitialState,
  reducers: {
    openModal(state, action) {
      state.isModalOpen = true;
      state.actionType = action.payload.actionType;
      if (action.payload.actionType !== actions.logOut) {
        state.modalData = action.payload.modalData;
      }
    },
    closeModal() {
      return modalInitialState;
    },
  },
});

const { openModal, closeModal } = modalSlice.actions;
const modalReducer = modalSlice.reducer;

export { openModal, closeModal, modalReducer };
