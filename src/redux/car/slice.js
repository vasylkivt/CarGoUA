import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCars, fetchCarsByPage } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const carSlice = createSlice({
  name: 'cars',

  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchAllCars.pending, handlePending)
      .addCase(fetchAllCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchAllCars.rejected, handleRejected)
      .addCase(fetchCarsByPage.pending, handlePending)
      .addCase(fetchCarsByPage.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, ...payload];
      })
      .addCase(fetchCarsByPage.rejected, handleRejected);
  },
});

export const carReducer = carSlice.reducer;
