import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { carReducer } from './car/slice';
import { favoriteReducer } from './favorite/slice';
import { filterReducer } from './filter/slice';

const favoritePersistConfig = {
  key: 'favorite',
  storage,
};

export const store = configureStore({
  reducer: {
    cars: carReducer,
    favorite: persistReducer(favoritePersistConfig, favoriteReducer),
    filters: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
