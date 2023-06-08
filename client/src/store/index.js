import { configureStore } from '@reduxjs/toolkit';
import roomSlice from "./reducers/roomReducer";

export const store = configureStore({
  reducer: {
    room: roomSlice
  },
})