import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';
const initialState = {
  cartItems : cartItems,
  amount: 4,
  total: 0,
  isLoading: true
}
//-- we can mutate the state thanks immer. when we clear all the items, we mutate the items array to an empty array
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart:(state)=> {
      state.cartItems = [];
    }

  }
})
//
export const { clearCart } = cartSlice.actions

export default cartSlice.reducer;