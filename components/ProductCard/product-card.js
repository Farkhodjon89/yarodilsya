import React, { useState } from 'react'
import { Box, Button, Grid, IconButton, Stack, Typography } from '@mui/material'
import ReactImageGallery from 'react-image-gallery'
import SectionTitle from '../SectionTitle/section-title'
import formatPrice from '../../utility/formatPrice'
import QuantityCount from '../QuantityCount/quantity-count'
import Heart from '../../public/icons/Heart'
import { useSelector, useDispatch } from 'react-redux'
import ProductCardAccordion from '../ProductCardAccordion/product-card-accordion'
import useMediaQuery from '@mui/material/useMediaQuery'
import { addToCart, removeFromCart } from '../../redux/actions/cart'
import ProductItem from '../ProductItem/product-item'
import SimilarProducts from '../SimilarProducts/similar-products'
import { purchaseAmount } from 'redux/actions/purchaseAmount'

const ProductCard = ({ product }) => {
  const [cartModal, setCartModal] = useState(false)
  const [addedToWishlist, addToWishlist] = useState(false)
  const [open, setOpen] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('')
  const [maxQuantity, setMaxQuantity] = useState(1)
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
    ...product?.galleryImages?.nodes?.map(({ sourceUrl }) => ({
      original: sourceUrl,
      thumbnail: sourceUrl,
    })),
  ]

  return (
    <Box>
      <SectionTitle title={product.name} />
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
              minHeight: { xs: '340px !important', md: '580px !important' },
              height: { xs: '340px !important', md: '580px !important' },
              maxHeight: { xs: '340px !important', md: '580px !important' },
            },
            '.image-gallery-thumbnail': {
              width: { md: '90px' },
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
                fontSize: { xs: '17px', md: '25px' },
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
                      fontSize: 16,
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
            {/* <QuantityCount
              product={product}
              quantity={quantity}
              setQuantity={setQuantity}
            /> */}
            <Button
              fullWidth
              variant='contained'
              color={!alreadyAddedToCart ? 'primary' : 'secondary'}
              sx={{
                height: '45px',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 'none',
                color: 'white.main',
              }}
              onClick={
                alreadyAddedToCart
                  ? () => dispatch(removeFromCart(selectedId))
                  : () => {
                      dispatch(
                        addToCart(product, selectedId, selectedSize, quantity)
                      )
                      dispatch(purchaseAmount(cart))
                      setCartModal(true)
                    }
              }
            >
              {alreadyAddedToCart ? 'В корзине' : 'Добавить в корзину'}
            </Button>
            <IconButton
              aria-label='wishlist'
              onClick={() => addToWishlist((prev) => !prev)}
            >
              <Heart />
            </IconButton>
          </Stack>
          <ProductCardAccordion />
          {/*<CartModal />*/}
        </Box>
      </Box>
      <Grid container spacing={3} sx={{ marginBottom: '90px' }}>
        <Grid item sx={12} md={6}>
          <Box sx={{ marginBottom: '40px' }}>
            <SectionTitle title='Описание' />
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: '16px',
                color: 'grey.main',
                display: !open ? 'webkitBox' : '',
                '-webkitBoxOrient': !open ? 'vertical' : '',
                '-webkitLineClamp': !open ? '3' : '',
                textOverflow: 'ellipsis',
                overflow: !open ? 'hidden' : '',
              }}
            >
              Женственные балетки базовых цветов подойдут почти под все элементы
              гардероба. Балетки хорошо сочетаются с джинсами для создания более
              повседневного стиля, так и с юбками и брюками для более
              официальных мероприятий. При разработке модели использовалась
              уникальная технология, которая способствует улучшенному
              воздухообмену. Балетки дышат, поэтому ноги не потеют даже в жаркие
              сезоны. Внут...
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: '15px',
                color: 'primary.main',
                lineHeight: '17px',
              }}
              onClick={() => setOpen((prev) => !prev)}
            >
              Развернуть описание
            </Typography>
          </Box>
          <Box>
            <SectionTitle title='Характеристики:' />
            <Stack
              sx={{ maxWidth: '400px', width: '100%' }}
              direction='column'
              spacing={1}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography
                  sx={{ fontWeight: 400, fontSize: '16px', color: 'grey.main' }}
                >
                  Бренд:
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: '16px',
                    color: 'text.primary',
                  }}
                >
                  Attitude
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography
                  sx={{ fontWeight: 400, fontSize: '16px', color: 'grey.main' }}
                >
                  Артикул:
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: '16px',
                    color: 'text.primary',
                  }}
                >
                  FRW65646
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography
                  sx={{ fontWeight: 400, fontSize: '16px', color: 'grey.main' }}
                >
                  Производитель:
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: '16px',
                    color: 'text.primary',
                  }}
                >
                  Россия
                </Typography>
              </Box>
            </Stack>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: '15px',
                color: 'primary.main',
                lineHeight: '17px',
              }}
              onClick={() => setOpen((prev) => !prev)}
            >
              Развернуть все характеристики
            </Typography>
          </Box>
        </Grid>
        <Grid item sx={12} md={6}>
          <SectionTitle title='С этим товаром рекомендуют' />
          <Grid container>
            {product.related.nodes.map((product, index) =>
              index < 3 ? (
                <Grid item xs={6} md={4}>
                  <ProductItem product={product} />
                </Grid>
              ) : (
                ''
              )
            )}
          </Grid>
        </Grid>
      </Grid>
      <SimilarProducts
        title='Похожие товары'
        products={product.related.nodes}
      />
    </Box>
  )
}

export default ProductCard
