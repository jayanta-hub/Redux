import { configureStore } from "@reduxjs/toolkit";
import { CounterSclice } from "./slice/counterSlice";

export const store = configureStore({
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  reducer: {
    CounterSclice: CounterSclice.reducer,
  },
});
