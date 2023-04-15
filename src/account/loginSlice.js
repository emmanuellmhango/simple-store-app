import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};

const loginReducer = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginTrue: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { loginTrue } = loginReducer.actions;

export default loginReducer.reducer;
