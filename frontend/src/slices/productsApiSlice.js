import { PRODUCTS_URL } from '../constants';
import { apiSlice } from './apiSlice';

// Injecting API endpoints for product-related actions into the 'apiSlice'
export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Defining a 'getProducts' query endpoint for fetching a list of products
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      // Specifying a duration to keep unused data in the cache (5 seconds)
      keepUnusedDataFor: 5,
    }),
    // Defining a 'getProductDetails' query endpoint for fetching details of a specific product
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createProduct: builder.mutation({
      query: () => ({
        url: PRODUCTS_URL,
        method: 'POST',
      }),
      invalidatesTags: ['Product'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useCreateProductMutation,
} = productsApiSlice;
