import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import NextLink from 'next/link';


const ProductItem = ({product}) => {

  return (
      <Card sx={{maxWidth: '200px', border: '2px solid #F2F2F2', marginRight: '20px', borderRadius: '8px',marginBottom: '40px'}}>
        <NextLink href={`/product/${product.slug}`}>
          <a>
            <CardMedia sx={{height: 200, borderRadius: '8px'}} image={product.image}/>
            <CardContent>
              <Typography sx={{fontWeight: 400, fontSize: '15px', color: '#606060'}}>{product.name}</Typography>
              <Typography>{product.price + 'сум'}</Typography>
            </CardContent>
          </a>
        </NextLink>
        <CardActions>
          <Button sx={{height: 40, maxWidth: 100, fontSize: 10,}} variant='contained' color='primary'>
            В корзину
          </Button>
        </CardActions>
      </Card>
  );
};

export default ProductItem;