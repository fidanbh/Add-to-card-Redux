import { configureStore } from "@reduxjs/toolkit";
import addingSlice, { addToCart } from "./addingSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer:{
    cart: cartSlice,

  }
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch