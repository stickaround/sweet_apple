import { combineReducers } from '@reduxjs/toolkit';

import productReducer from '../pages/product/productSlice';

const rootReducer = combineReducers({
  product: productReducer,
});

export default rootReducer;
