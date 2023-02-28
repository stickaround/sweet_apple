import * as React from 'react';
import { useParams } from 'react-router-dom';

import { Container } from '@mui/material';

import { ProductCard } from './ProductCard';
import { Loader } from '../../core/components/Loader';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import {
  getProductDetailSync,
  selectLoading,
  selectProduct,
} from './productSlice';

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);
  const product = useAppSelector(selectProduct);

  React.useEffect(() => {
    dispatch(getProductDetailSync(id));
  }, [id, dispatch]);

  return loading ? (
    <Loader />
  ) : (
    <Container sx={{ mt: '40px' }}>
      {product && <ProductCard product={product}></ProductCard>}
    </Container>
  );
}

export { ProductDetail };
