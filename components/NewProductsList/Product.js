import { Button } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'components/Link'
import NewSetQuantity from 'components/NewSetQuantity'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from 'redux/actions/cart'
import { formatPrice } from 'utility/formatPrice'
import { getDiscount } from 'utility/getDiscount'

const Product = ({ product }) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const [quantity, setQuantity] = useState(1)

  const alreadyAddedToCart = !!cart.find(
    (item) => item.selectedId === product.databaseId
  )

  const quantityInCart = cart.find(
    (item) => item.selectedId === product.databaseId
  )?.selectedQuantity

  useEffect(() => {
    if (quantityInCart) {
      setQuantity(quantityInCart)
    }
  }, [quantityInCart])

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        p: { xs: 0, lg: 1 },
        border: '2px solid transparent',
        borderRadius: '8px',
        '&:hover': {
          border: { xs: 'none', lg: '2px solid #F2F2F2' },
        },
      }}
    >
      <Link
        href={`/product/${product.slug}`}
        sx={{ display: 'flex', height: '100%', flexDirection: 'column' }}
      >
        <Box
          position='relative'
          width='100%'
          height={{ xs: 165, lg: 200 }}
          borderRadius='8px'
          overflow='hidden'
        >
          <Image
            alt={product?.name}
            src={product?.image?.sourceUrl}
            layout='fill'
          />
          {product?.onSale && (
            <Box
              position='absolute'
              top={10}
              left={10}
              bgcolor='#FF3030'
              borderRadius='8px'
              sx={{
                color: 'common.white',
                fontWeight: 700,
                fontSize: 13,
                lineHeight: '18px',
                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                px: 0.5,
              }}
            >
              {getDiscount(product?.woocsRegularPrice, product?.woocsSalePrice)}
            </Box>
          )}
        </Box>
        <Box
          sx={{
            color: 'grey.main',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: '3',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            mt: 0.5,
            mb: { xs: 2, lg: 5 },
          }}
        >
          {product?.name}
        </Box>
        <Box
          sx={{
            fontSize: { xs: 15, lg: 19 },
            lineHeight: { xs: '20px', lg: '26px' },
            fontWeight: 600,
            color: 'text.primary',
            mt: 'auto',
            mb: 1,
          }}
        >
          {product?.onSale && (
            <Box
              sx={{
                fontSize: { xs: 15, lg: 16 },
                lineHeight: { xs: '20px', lg: '22px' },
                textDecoration: 'line-through',
                textDecorationColor: 'red',
                color: '#606060',
                fontWeight: 400,
              }}
            >
              {formatPrice(product?.woocsRegularPrice)}
            </Box>
          )}
          {formatPrice(
            product?.onSale
              ? product?.woocsSalePrice
              : product?.woocsRegularPrice
          )}
        </Box>
      </Link>
      <Box display='flex' alignItems='center'>
        <NewSetQuantity
          quantity={quantity}
          setQuantity={setQuantity}
          max={product?.stockQuantity}
          id={product?.databaseId}
          mr={{ xs: 1, lg: 1.5 }}
        />
        <Button
          fullWidth
          color={alreadyAddedToCart ? 'secondary' : 'primary'}
          onClick={
            alreadyAddedToCart
              ? () => dispatch(removeFromCart(product?.databaseId))
              : () =>
                  dispatch(addToCart(product, product?.databaseId, quantity))
          }
          sx={{
            color: 'common.white',
          }}
        >
          {alreadyAddedToCart ? 'В корзине' : 'В корзину'}
        </Button>
      </Box>
    </Box>
  )
}

export default Product
