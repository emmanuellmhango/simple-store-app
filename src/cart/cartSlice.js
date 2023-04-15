import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addProductToCart: (state, action) => {
      const { product } = action.payload;
      const existingProduct = state.find((p) => p.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...product, quantity: 1 });
      }
    },
  },
});

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;
