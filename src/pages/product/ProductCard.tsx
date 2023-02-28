import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Box,
  Rating,
  Chip,
} from '@mui/material';

import { Product } from '../../types';
import { currencyFormatter } from '../../helpers';

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <Stack direction='row' alignItems='center'>
          <Link
            to={`/products/${product.id}`}
            style={{ textDecoration: 'none' }}
          >
            <Typography variant='h5' component='div'>
              {product.name}
            </Typography>
          </Link>
          <Typography variant='subtitle1' component='span' marginLeft='auto'>
            {currencyFormatter.format(product.price)}
          </Typography>
        </Stack>
        <Box>
          <Typography variant='body2' color='text.secondary' height='100px'>
            {product.description}
          </Typography>
          <Typography
            variant='caption'
            color='text.secondary'
            marginBottom='20px'
          >
            Available:
            <Chip
              color={product.isAvailable ? 'primary' : 'error'}
              variant='filled'
              label={product.isAvailable ? 'Yes' : 'No'}
              sx={{ marginLeft: '5px' }}
            />
          </Typography>
        </Box>
        <Rating value={product.rating} precision={0.1} readOnly />
      </CardContent>
    </Card>
  );
}

export { ProductCard };
