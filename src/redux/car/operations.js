import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://6574404bf941bda3f2af8455.mockapi.io/';

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
