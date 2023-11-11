import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isFilters: false,
  brand: '',
  price: 0,
  mileageFrom: 0,
  mileageTo: 0,
};

const filterSlice = createSlice({
  name: 'filter',

  initialState,

  reducers: {
    setFilter(state, { payload }) {
      Object.assign(state, payload);
    },
    resetFilter() {
      return initialState;
    },
  },
});

export const { setFilter, resetFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
