import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from '../utils/cartUtils';

// AuthSlice and cartSlice: Auth handles authentication state, including setting up user credentials and logging out.

// Retrieve the cart data from local storage or initialize an empty cart
const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [], shippingAddress: {}, paymentMethod: 'Paypal' };

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

      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      // Find and remove the specified item from the cart
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);

      return updateCart(state);
    },
    // Reducer to save the shipping address in the cart state
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      return updateCart(state);
    },
    // Reducer to save the payment method in the cart state
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      // Update the cart in local storage and return the updated state
      return updateCart(state);
    },
    // Reducer to clear all cart items
    clearCartItems: (state, action) => {
      state.cartItems = [];
      return updateCart(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
  clearCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;
