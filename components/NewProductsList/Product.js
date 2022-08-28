import { Button } from '@mui/material'
import { Box } from '@mui/system'
import NewSetQuantity from 'components/NewSetQuantity'
import Image from 'next/image'
import { useRouter } from 'next/router'
import WishlistIcon from 'public/icons/WishlistIcon'
import WishlistIconFilled from 'public/icons/WishlistIconFilled'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from 'redux/actions/cart'
import { addToWishlist, removeFromWishlist } from 'redux/actions/wishlist'
import { formatPrice } from 'utility/formatPrice'
import { getDiscount } from 'utility/getDiscount'

const Product = ({ product }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const wishlist = useSelector((state) => state.wishlist)
  const [quantity, setQuantity] = useState(1)

  const alreadyAddedToCart = !!cart.find(
    (item) => item.selectedId === product.databaseId
  )

  const alreadyAddedToWishlist = !!wishlist.find(
    (item) => item.databaseId === product.databaseId
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
        width: '100%',
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
      <Box
        onClick={() => router.push(`/product/${product.slug}`)}
        sx={{
          display: 'flex',
          height: '100%',
          flexDirection: 'column',
          cursor: 'pointer',
        }}
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
                fontSize: 14,
                lineHeight: '18px',
                px: 0.5,
              }}
            >
              {getDiscount(product?.woocsRegularPrice, product?.woocsSalePrice)}
            </Box>
          )}
          <Box
            position='absolute'
            top={10}
            right={10}
            display='flex'
            alignItems='center'
            justifyContent='center'
            sx={{
              cursor: 'pointer',
            }}
            onClick={(e) => {
              e.stopPropagation()
              if (alreadyAddedToWishlist) {
                dispatch(removeFromWishlist(product?.databaseId))
              } else {
                dispatch(addToWishlist(product))
              }
            }}
          >
            {alreadyAddedToWishlist ? <WishlistIconFilled /> : <WishlistIcon />}
          </Box>
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
      </Box>
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
            '&:hover': {
              bgcolor: alreadyAddedToCart ? '#4DDDA8' : '#FE5EBE',
            },
          }}
        >
          {alreadyAddedToCart ? 'В корзине' : 'В корзину'}
        </Button>
      </Box>
    </Box>
  )
}

export default Product
