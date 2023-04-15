import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  products: [],
  error: '',
};

const productsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    fetchProductsInit: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsFulfilled: (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchProductsError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductsInit,
  fetchProductsFulfilled,
  fetchProductsError,
} = productsSlice.actions;

export default productsSlice.reducer;

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(fetchProductsInit());
    const response = await axios.get('https://fakestoreapi.com/products');
    dispatch(fetchProductsFulfilled(response.data));
  } catch (error) {
    dispatch(fetchProductsError(error.message));
  }
};

export const fetchSingleProductDetails = async (id) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response.data;
};
