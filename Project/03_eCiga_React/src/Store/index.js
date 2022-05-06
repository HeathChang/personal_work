import { configureStore } from '@reduxjs/toolkit';
import productSlice from './product'

const store = configureStore({
  reducer: {
    productState: productSlice.reducer
  },
});

export default store;