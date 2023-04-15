import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../products/productSlice';
import categoriesReducer from '../categories/categorySlice';
import SpecificCategorySlice from '../specific/specificSlice';
import CartSlice from '../cart/cartSlice';
import loginSlice from '../account/loginSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    specifics: SpecificCategorySlice,
    cart: CartSlice,
    login: loginSlice,
  },
});
