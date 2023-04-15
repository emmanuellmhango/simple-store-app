import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  products: [],
  error: '',
};

const SpecificCategorySlice = createSlice({
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
} = SpecificCategorySlice.actions;

export default SpecificCategorySlice.reducer;

export const fetchSpecificProducts = (category) => async (dispatch) => {
  try {
    dispatch(fetchProductsInit());
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    dispatch(fetchProductsFulfilled(response.data));
  } catch (error) {
    dispatch(fetchProductsError(error.message));
  }
};
