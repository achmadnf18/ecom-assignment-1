/* eslint-disable unicorn/prefer-spread */
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { poininApi } from '@/services/poinin';

import reducer from './reducer';

const persistConfig = {
  key: 'poinin',
  storage,
  whitelist: ['bag'],
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, reducer),
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat(poininApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
