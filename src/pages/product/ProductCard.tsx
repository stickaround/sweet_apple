import * as React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Stack,
  Button,
  Rating,
} from '@mui/material';

import { Product } from '../../types';
import { currencyFormatter } from '../../helpers';

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <Stack direction='row' alignItems='center'>
          <Typography variant='h5' component='div'>
            {product.name}
          </Typography>
          <Typography variant='subtitle1' component='span' marginLeft='auto'>
            {currencyFormatter.format(product.price)}
          </Typography>
        </Stack>
        <Typography variant='body2' color='text.secondary' height='100px'>
          {product.description}
        </Typography>
        <Rating value={product.rating} precision={0.1} readOnly />
      </CardContent>
      <CardActions>
        {product.isAvailable ? (
          <Button variant='outlined' color='primary' size='small'>
            Add to Cart
          </Button>
        ) : (
          <Typography variant='inherit' component='div'>
            Not Available
          </Typography>
        )}
      </CardActions>
    </Card>
  );
}

export { ProductCard };
