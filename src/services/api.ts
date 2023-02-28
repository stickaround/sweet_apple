import axios from 'axios';

import { Product } from '../types';

export const api = axios.create({
  baseURL:
    process.env.API_URL ??
    'https://sweet-apple-acres.netlify.app/.netlify/functions/api/',
});

export const getProducts = () => api.get<Product[]>('/products');

export const getProductDetail = (id: string | undefined) =>
  api.get<Product>(`/products/${id}`);
