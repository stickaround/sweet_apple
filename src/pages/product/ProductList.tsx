import * as React from 'react';
import { Container, Grid } from '@mui/material';

import { Loader } from '../../core/components/Loader';
import { ProductCard } from './ProductCard';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { getProductsSync, selectLoading, selectProducts } from './productSlice';

function ProductList() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);
  const products = useAppSelector(selectProducts);

  React.useEffect(() => {
    dispatch(getProductsSync());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : (
    <Container sx={{ mt: '40px' }}>
      <Grid container spacing={1} sx={{ mt: '40px' }}>
        {products.length
          ? products.map((product) => (
              <Grid item xs={4} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))
          : 'No products'}
      </Grid>
    </Container>
  );
}

export { ProductList };
