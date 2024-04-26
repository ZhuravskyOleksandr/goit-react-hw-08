import { createSlice } from '@reduxjs/toolkit';
import { authInitialState } from '../../constants';
import { register, login, logout, refreshUser } from './operations';

const handlePending = (state, action) => {
  state.isLoading = true;
  state.error = null;
  if (action.type === 'auth/refresh/pending') {
    state.isRefreshing = true;
  }
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.isLoggedIn = true;
  state.user = action.payload.user;
  state.token = action.payload.token;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  if (action.type === 'auth/refresh/rejected') {
    state.isRefreshing = false;
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(register.rejected, handleRejected)

      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, handleFulfilled)
      .addCase(login.rejected, handleRejected)

      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, () => {
        return authInitialState;
      })
      .addCase(logout.rejected, handleRejected)

      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(refreshUser.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
