import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';

// Defines the bas API configuration and tag types, endpoints for products, orders and the id is identified in the file(productSlice, orderSlice and userSlice)

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

// Creating an API slice using 'createApi' function from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
  // Configuring the API slice with the previously defined base query
  baseQuery,
  // Defining tag types for ( Product, Order, User)
  tagTypes: ['Product', 'Order', 'User'],
  // Endpoints are defined using the 'endpoints' callback function
  endpoints: (builder) => ({}),
});
