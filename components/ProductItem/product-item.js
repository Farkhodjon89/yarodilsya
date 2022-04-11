import React, {useState} from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import NextLink from 'next/link';
import QuantityCount from "../QuantityCount/quantity-count";
import formatPrice from "../../utility/FormatPrice";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart} from "../../redux/actions/cart";
import useMediaQuery from "@mui/material/useMediaQuery";

const ProductItem = ({product, title}) => {
  const [quantity, setQuantity] = useState(1)
  const cart = useSelector((state) => state.cart)
  const wishlist = useSelector((state) => state.wishlist)
  const dispatch = useDispatch()
  const matches = useMediaQuery('(max-width: 600px)');

  const alreadyAddedToCart = !!cart.find(
      (item) => item.selectedId === product.databaseId
  )
  const alreadyAddedToWishlist = !!wishlist.find(
      (item) => item.databaseId === product.databaseId
  )

  return (
      <Card sx={{
        maxWidth: {xs: '180px',md:'200px'},
        boxShadow: 'none',
        marginRight: title === 'Товар дня' || matches ? '0px' : '20px',
        borderRadius: '8px',
        marginBottom: title === 'Товар дня' ? '0px' : '40px',
        border: '2px solid transparent',
        '&:hover': {
          border: '2px solid #F2F2F2;',
        }
      }}>
        <NextLink href={`/product/${product.slug}`}>
          <a>
            <CardMedia sx={{height: 200, borderRadius: '8px'}} image={product.image.sourceUrl}/>
            <CardContent>
              <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: '15px',
                    color: 'grey.main',
                    display: '-webkit-box',
                    "-webkit-box-orient": 'vertical',
                    "-webkit-line-clamp": "2",
                    textOverflow: "ellipsis",
                    overflow: 'hidden'
                  }}
              >
                {product.name}
              </Typography>
              <Typography sx={{fontWeight: 600, fontSize: {xs: '15px', md: '19px'}, color: 'text.primary'}}>
                {formatPrice(product.woocsRegularPrice)}
              </Typography>
            </CardContent>
          </a>
        </NextLink>
        <CardActions sx={{justifyContent: 'space-between', display: 'flex'}}>
          <Button onClick={
            alreadyAddedToCart
                ? () => dispatch(removeFromCart(product.databaseId))
                : () => {
                  dispatch(
                      addToCart(
                          product,
                          product.databaseId,
                          quantity
                      )
                  )
                }
          }
                  sx={{
                    textTransform: 'initial',
                    height: {xs: 30, md: 40},
                    maxWidth: 100,
                    fontSize:  {xs: 12,md:13},
                    boxShadow: 'none',
                    color: 'white.main',
                    borderRadius: {xs: '8px', md: '5px'},
                  }} variant='contained'
                  color={!alreadyAddedToCart ? 'primary' : 'secondary'}>
            {!alreadyAddedToCart ? 'В корзину' : 'В корзине'}
          </Button>
          <QuantityCount quantity={quantity} setQuantity={setQuantity}/>
        </CardActions>
      </Card>
  );
};

export default ProductItem;