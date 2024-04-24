import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

const { changeFilter } = filtersSlice.actions;
const filtersReducer = filtersSlice.reducer;
const selectNameFilter = state => state.filters.name;

export { changeFilter, filtersReducer, selectNameFilter };
