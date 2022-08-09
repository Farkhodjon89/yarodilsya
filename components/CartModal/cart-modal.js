import React, { useState } from 'react'
import { Box, Button, Grid, IconButton, Stack, Typography } from '@mui/material'
import ReactImageGallery from 'react-image-gallery'
import { formatPrice } from '../../utility/formatPrice'
import QuantityCount from '../QuantityCount/quantity-count'
import { addToCart, removeFromCart } from '../../redux/actions/cart'
import Heart from '../../public/icons/Heart'
import ProductCardAccordion from '../ProductCardAccordion/product-card-accordion'
import SectionTitle from '../SectionTitle/section-title'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useDispatch, useSelector } from 'react-redux'
import ReactDom from 'react-dom'

const CartModal = ({ product, cartModal, modal = 'modal', setCartModal }) => {
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [selectedId, setSelectedId] = useState(0)

  const matches = useMediaQuery('(max-width: 600px)')
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const wishlist = useSelector((state) => state.wishlist)

  const alreadyAddedToCart = !!cart.find(
    (item) => item.selectedId === selectedId
  )
  const alreadyAddedToWishlist = !!wishlist.find(
    (item) => item.databaseId === selectedId
  )

  const sizes = product?.variations
    ? product.variations?.nodes?.map((variation) => ({
        databaseId: variation.databaseId,
        stockQuantity: variation.stockQuantity,
        size: variation.size?.nodes[0]?.value,
      }))
    : [
        {
          databaseId: product.databaseId,
          stockQuantity: product.stockQuantity,
          size: product?.size?.nodes[0]?.options,
        },
      ]
  const images = [
    {
      original: product.image.sourceUrl,
      thumbnail: product.image.sourceUrl,
    },
    // ...product?.galleryImages?.nodes?.map(({sourceUrl}) => ({
    //   original: sourceUrl,
    //   thumbnail: sourceUrl,
    // })),
  ]

  return ReactDom.createPortal(
    <>
      <Box
        sx={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          top: '100px',
          display: cartModal ? 'block' : 'none',
          left: '0',
          backgroundColor: 'rgba(0, 0, 0, 0.4);',
          zIndex: 8,
        }}
      >
        <Box
          sx={{
            position: 'fixed',
            top: '185px',
            left: '50%',
            transform: 'translate(-50%)',
            borderRadius: '8px',
            width: '900px',
            height: '530px',
            display: cartModal ? 'block' : 'none',
            backgroundColor: '#fff',
            padding: '20px',
            zIndex: 9,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <SectionTitle modal={modal} title={product.name} />
            <Box onClick={() => setCartModal(false)}>Закрыть</Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              marginBottom: { xs: '15px', md: '90px' },
            }}
          >
            <Box
              sx={{
                width: { xs: '100%', marginRight: '20px', md: '45%' },
                mb: { xs: 2, md: 0 },
                '.image-gallery-slide .image-gallery-image': {
                  objectFit: 'cover !important',
                  minHeight: { xs: '340px !important', md: '380px !important' },
                  height: { xs: '340px !important', md: '380px !important' },
                  maxHeight: { xs: '340px !important', md: '380px !important' },
                },
                '.image-gallery-thumbnail': {
                  width: { md: '60px' },
                  borderRadius: '8px',
                },
                '.image-gallery-thumbnail ': {
                  border: '2px solid #EA56AE;',
                },
                '.image-gallery-right-nav .image-gallery-svg': {
                  height: '72px !important',
                  width: '36px !important',
                },
                '.image-gallery-left-nav .image-gallery-svg': {
                  height: '72px !important',
                  width: '36px !important',
                },
                '@media (hover: hover) and (pointer: fine)': {
                  '.image-gallery-icon:hover': {
                    color: '#f6a68d !important',
                  },
                  '.image-gallery-bullets .image-gallery-bullet:hover': {
                    background: '#f6a68d !important',
                    border: '1px solid #f6a68d !important',
                  },
                },
              }}
            >
              <ReactImageGallery
                items={images}
                thumbnailPosition='left'
                showThumbnails={!matches}
                showBullets={false}
                showPlayButton={false}
                showFullscreenButton={false}
                autoPlay={false}
              />
            </Box>
            <Box
              sx={{
                width: { xs: '100%', md: '40%' },
              }}
            >
              {product.onSale ? (
                <Typography
                  sx={{
                    fontWeight: '600',
                    fontSize: { xs: '16px', md: '25px' },
                    color: 'text.primary',
                  }}
                >
                  {formatPrice(product.woocsSalePrice)}
                </Typography>
              ) : (
                <Typography sx={{ fontWeight: 600, fontSize: '25px' }}>
                  {formatPrice(product.woocsRegularPrice)}
                </Typography>
              )}
              <Typography
                sx={{
                  color: 'grey.main',
                  fontSize: '15px',
                  fontWeight: '400',
                  marginBottom: '30px',
                }}
              >
                Артикул: {product.sku}
              </Typography>
              <Grid container spacing={1}>
                {sizes.map(({ databaseId, stockQuantity, size }) => {
                  const currentSize = selectedSize === size
                  return (
                    <Grid item xs={3} key={databaseId}>
                      <Button
                        sx={{
                          fontWeight: 'normal',
                          fontSize: 11,
                          padding: '6px 12px',
                          color: 'grey.main',
                        }}
                        color={currentSize ? 'secondary' : 'primary'}
                        variant={currentSize ? 'contained' : 'text'}
                        onClick={() => {
                          setSelectedId(databaseId)
                          setSelectedSize(size)
                          setMaxQuantity(stockQuantity)
                        }}
                      >
                        {size}
                      </Button>
                    </Grid>
                  )
                })}
              </Grid>
              <Stack
                direction='row'
                spacing={2}
                sx={{ margin: '20px 0', alignItems: 'center' }}
              >
                <QuantityCount
                  product={product}
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
                <Button
                  variant='contained'
                  color={!alreadyAddedToCart ? 'primary' : 'secondary'}
                  sx={{
                    height: '35px',
                    width: { xs: '140px', md: '160px' },
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: 'none',
                    fontSize: '10px',
                    color: 'white.main',
                  }}
                  disabled={!selectedSize}
                  onClick={() => {
                    alreadyAddedToCart
                      ? () => dispatch(removeFromCart(selectedId))
                      : () => {
                          dispatch(
                            addToCart(
                              product,
                              selectedId,
                              selectedSize,
                              quantity
                            )
                          )
                          setCartModal(true)
                        }
                  }}
                >
                  {selectedSize
                    ? alreadyAddedToCart
                      ? 'В корзине'
                      : 'Добавить в корзину'
                    : 'Выбрать размер'}
                </Button>
                <IconButton
                  aria-label='wishlist'
                  onClick={() => addToWishlist((prev) => !prev)}
                >
                  <Heart />
                </IconButton>
              </Stack>
              <ProductCardAccordion />
            </Box>
          </Box>
        </Box>
      </Box>
    </>,
    document.getElementById('portal')
  )
}

export default CartModal
