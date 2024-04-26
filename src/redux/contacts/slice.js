import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from '../../constants';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './operations';
import { logout } from '../auth/operations';

const handlePending = state => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected)

      .addCase(editContact.pending, handlePending)
      .addCase(editContact.fulfilled, (state, action) => {
        const contactIdx = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(contactIdx, 1, { ...action.payload });
      })
      .addCase(editContact.rejected, handleRejected)

      .addCase(logout.fulfilled, state => {
        state.items = [];
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
