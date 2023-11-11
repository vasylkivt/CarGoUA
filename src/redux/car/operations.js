import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://654b4ba85b38a59f28eed274.mockapi.io/';

export const fetchCarsByPage = createAsyncThunk(
  'cars/fetchCarsByPage',
  async ({ page = 1, limit = 12 }, thunkAPI) => {
    try {
      const { data } = await axios.get('adverts', {
        params: { limit, page },
      });

      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchAllCars = createAsyncThunk(
  'cars/fetchAllCars',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('adverts');

      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  },
);
