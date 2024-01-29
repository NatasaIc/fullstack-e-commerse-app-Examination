import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice';
import cartSliceReducer from './slices/cartSlice';
import authSliceReducer from './slices/authSlice';

// Configuring the Redux store using 'configureStore'
const store = configureStore({
  // Combining multiple reducers into a single root reducer
  reducer: {
    // Using 'apiSlice.reducerPath' as the key for the apiSlice reducer
    [apiSlice.reducerPath]: apiSlice.reducer,
    // Adding the 'cartSliceReducer' under the 'cart' key in the root reducer
    cart: cartSliceReducer,
    // Adding the 'authSliceReducer' under the 'auth' key in the root reducer
    auth: authSliceReducer,
  },
  // Customizing middleware to include both default middleware and 'apiSlice.middleware'
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
