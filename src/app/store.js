import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import carReducer from '../features/carSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    car: carReducer,
  },
});
