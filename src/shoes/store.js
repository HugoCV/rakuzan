import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './shoesSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
