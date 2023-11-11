import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: 'favorites',

  initialState,

  reducers: {
    addToFavorite(state, { payload }) {
      state.items.push(payload);
    },
    deleteFromFavorite(state, { payload }) {
      state.items = state.items.filter(({ id }) => id !== payload);
    },
  },
});

export const { addToFavorite, deleteFromFavorite } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
