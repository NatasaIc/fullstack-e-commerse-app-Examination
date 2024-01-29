import { apiSlice } from './apiSlice';
import { ORDERS_URL } from '../constants';

// Injecting API endpoint for order-related actions into the 'apiSlice'
export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Defining a 'createOrder' mutation endpoint for creating a new order
    createOrder: builder.mutation({
      // Configuring the API request with the 'ORDERS_URL', 'POST' method, and order data
      query: (order) => ({
        url: ORDERS_URL,
        method: 'POST',
        body: { ...order },
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = ordersApiSlice;
