

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage'; // Assuming async storage for React Native

import rootReducer from './rootReducer'// Assuming your root reducer is defined here

// Ensure this points to your combined reducer

const persistConfig = {
  key: 'root',
  storage: storage,
  // Optionally, whitelist reducers
  // whitelist: ['reducer1', 'reducer2'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // Add middleware, enhancers if needed
});

export const persistor = persistStore(store);
