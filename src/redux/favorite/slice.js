import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: 'favorites',

  initialState,

  reducers: {
    setFavorite(state, { payload }) {
      state.items.push(payload);
    },
    deleteFavorite(state, { payload }) {
      state.items = state.items.filter(({ id }) => id !== payload);
    },
  },
});

export const { setFavorite, deleteFavorite } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
