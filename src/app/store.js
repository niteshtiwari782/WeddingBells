import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './FilterSlice';

export const store = configureStore({
  reducer: { filters: filtersReducer },
});
