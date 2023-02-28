import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getProducts, getProductDetail } from '../../services/api';
import { Product } from '../../types';
import { RootState } from '../../store';

const initialState: {
  products: Product[];
  product: Product | null;
  loading: boolean;
} = {
  products: [],
  product: null,
  loading: true,
};

export const getProductsSync = createAsyncThunk(
  'product/get_products',
  async () => {
    const { data: products } = await getProducts();
    return { products };
  }
);

export const getProductDetailSync = createAsyncThunk(
  'product/get_product_detail',
  async (id: string | undefined) => {
    const { data: product } = await getProductDetail(id);
    return { product };
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
      })
      .addCase(getProductDetailSync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductDetailSync.fulfilled, (state, action) => {
        state.loading = false;
        state.product = { ...action.payload.product };
      })
      .addCase(getProductDetailSync.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const productActions = productSlice.actions;

export const selectLoading = (state: RootState) => state.product.loading;
export const selectProducts = (state: RootState) => state.product.products;
export const selectProduct = (state: RootState) => state.product.product;

const productReducer = productSlice.reducer;

export default productReducer;
