import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount:0,
  
}

interface iPayload {
id: number;
img: string;
title: string;
price: number
}

// export const addingSlice = createSlice({
//   name: "adding",
//   initialState,
//   reducers: {
//     addToCart:(state: any, action: PayloadAction<iPayload>){
//       state.cartItems.push(action.payload)
//       console.log(state.cartItems)
//   },
// });
const addingSlice = createSlice({
  name:'adding',
  initialState,
  reducers:{
     addToCart(state: any, action: PayloadAction<iPayload>){
      state.cartItems.push(action.payload)
      console.log(state.cartItems)
     },

      // increment(state, action){
      //     state.cartTotalAmount+=action.payload
      // }
  }
});
export const { addToCart } = addingSlice.actions;

export default addingSlice.reducer;
