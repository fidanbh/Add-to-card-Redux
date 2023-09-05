import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { toast } from "react-toastify";

// type cartIt ={
//     arr: string[]
// }
// const obj: cartIt={
//     arr: []
// }

// type InitialState =  {

//     cartItems: any[],
// }

// const initialState: InitialState = {

//     cartItems: [],
// }

const initialState = {
  //   cartItems: [],
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

interface iPayload {
  id: number;
  img: string;
  title: string;
  price: number;
  cartQuantity: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state: any, action: PayloadAction<iPayload>) {
      const itemIndex = state.cartItems.findIndex(
        (detail) => detail.id === action.payload.id
      );
      //console.log(state)
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        //console.log(state.cartItems)
        toast.info(
          `increased ${state.cartItems[itemIndex].title} product quantity`,
          {
            position: "top-left",
          }
        );
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        //console.log(state.cartItems)
        toast.success(`added ${action.payload.title} to card`, {
          position: "top-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeItems(state: any, action: PayloadAction<iPayload>) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      toast.error(`added ${action.payload.title} remove from card`, {
        position: "top-left",
      });
    },
    decreaseCart(state: any, action: PayloadAction<iPayload>) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -=1;
      } else {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals(state: any, action: PayloadAction<iPayload>){
        let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem)=>{
          const {price, cartQuantity} = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal
          cartTotal.quantity += cartQuantity

          return cartTotal
        },{
          total:0,
          quantity: 0
        })

        state.cartTotalQuantity = quantity
        state.cartTotalAmount = total
    }
  },
});

export const { addToCart, removeItems, decreaseCart , getTotals} = cartSlice.actions;
export default cartSlice.reducer;
