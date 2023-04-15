import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  categories: [],
  error: '',
};

const categorySlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    fetchCategoriesInit: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCategoriesFulfilled: (state, action) => {
      state.categories = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchCategoriesError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCategoriesInit,
  fetchCategoriesFulfilled,
  fetchCategoriesError,
} = categorySlice.actions;

export default categorySlice.reducer;

export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch(fetchCategoriesInit());
    const response = await axios.get('https://fakestoreapi.com/products/categories');
    dispatch(fetchCategoriesFulfilled(response.data));
  } catch (error) {
    dispatch(fetchCategoriesError(error.message));
  }
};
