import { createSlice } from '@reduxjs/toolkit';
import { udateCart } from '../utils/cartUtils';

// Retrieve the cart data from local storage or initialize an empty cart
const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [] };

// Create a slice of the Redux store for the cart
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  // Define reducers for actions that can modify the state
  reducers: {
    addToCart: (state, action) => {
      // Extract the item payload from the action
      const item = action.payload;
      // Check if the item is already in the cart
      const existItem = state.cartItems.find((x) => x._id === item._id);
      // If the item exists, update its quantity; otherwise, add it to the cart
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x,
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      return udateCart(state);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
