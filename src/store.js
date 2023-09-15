import { configureStore } from '@reduxjs/toolkit';
import userReducer from './featchers/user/userSlice';
import cartReducer from './featchers/cart/cartSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
