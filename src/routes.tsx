import * as React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Layout } from './core/components/Layout';
import { ProductList } from './pages/product/ProductList';
import { ProductDetail } from './pages/product/ProductDetail';

function SweetAppleRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/products' element={<ProductList />} />
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='*' element={<Navigate to='/products' replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export { SweetAppleRoutes as Routes };
