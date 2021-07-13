import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
// import { createStore } from 'redux';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
