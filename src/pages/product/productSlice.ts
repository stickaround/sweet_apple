import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getProducts } from '../../services/api';
import { Product } from '../../types';
import { RootState } from '../../store';

const initialState: { products: Product[]; loading: boolean } = {
  products: [],
  loading: true,
};

export const getProductsSync = createAsyncThunk(
  'product/get_products',
  async () => {
    const { data: products } = await getProducts();
    return { products };
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsSync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductsSync.fulfilled, (state, action) => {
        state.loading = false;
        state.products = [...action.payload.products];
      })
      .addCase(getProductsSync.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const productActions = productSlice.actions;

export const selectLoading = (state: RootState) => state.product.loading;
export const selectProducts = (state: RootState) => state.product.products;

const productReducer = productSlice.reducer;

export default productReducer;
