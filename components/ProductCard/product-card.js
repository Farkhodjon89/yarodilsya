import { useEffect, useState } from 'react'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import ReactImageGallery from 'react-image-gallery'
import SectionTitle from '../SectionTitle/section-title'
import { formatPrice } from 'utility/formatPrice'
import { useDispatch, useSelector } from 'react-redux'
import ProductCardAccordion from '../ProductCardAccordion/product-card-accordion'
import useMediaQuery from '@mui/material/useMediaQuery'
import NewProductsList from 'components/NewProductsList'
import NewSetQuantity from 'components/NewSetQuantity'
import 'react-image-gallery/styles/css/image-gallery.css'
import { addToCart, removeFromCart } from 'redux/actions/cart'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('lg'))
  const cart = useSelector((state) => state.cart)
  const [quantity, setQuantity] = useState(1)

  const alreadyAddedToCart = !!cart.find(
    (item) => item.selectedId === product.databaseId
  )

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

  const quantityInCart = cart.find(
    (item) => item.selectedId === product.databaseId
  )?.selectedQuantity

  useEffect(() => {
    if (quantityInCart) {
      setQuantity(quantityInCart)
    }
  }, [quantityInCart])

  return (
    <Box>
      <SectionTitle title={product.name} withBack />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          marginBottom: { xs: '15px', lg: '90px' },
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', lg: '45%' },
            mr: { xs: 0, lg: 3 },
            mb: { xs: 2, lg: 0 },
            '& .image-gallery-slide-wrapper': {
              width: { xs: '100%', lg: 'calc(100% - 110px)' },
            },
            '& .image-gallery-slide': {
              width: '100%',
            },
            '.image-gallery-slide .image-gallery-image': {
              objectFit: 'cover !important',
              minHeight: { xs: '340px !important', lg: '580px !important' },
              height: { xs: '340px !important', lg: '580px !important' },
              maxHeight: { xs: '340px !important', lg: '580px !important' },
              border: '1px solid #E8E8E8 !important',
              filter: 'drop-shadow(0px 4px 40px rgba(0, 0, 0, 0.1)) !important',
              borderRadius: '8px !important',
              overflow: 'hidden',
            },
            '.image-gallery-thumbnail': {
              width: { lg: '90px' },
              borderRadius: '8px',
              overflow: 'hidden',
              '&:hover': {
                border: '2px solid #EA56AE',
              },
            },
            '.image-gallery-thumbnail.active': {
              border: '2px solid #EA56AE',
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
            showThumbnails={!mobile}
            showBullets={false}
            showPlayButton={false}
            showFullscreenButton={false}
            autoPlay={false}
          />
        </Box>
        <Box
          sx={{
            width: { xs: '100%', lg: '40%' },
          }}
        >
          <Box
            sx={{
              fontSize: { xs: 17, lg: 25 },
              lineHeight: { xs: '23px', lg: '32px' },
              fontWeight: 600,
              color: 'text.primary',
              mt: 'auto',
              mb: 1,
            }}
          >
            {product?.onSale && (
              <Box
                sx={{
                  fontSize: { xs: 14, lg: 17 },
                  lineHeight: { xs: '19px', lg: '23px' },
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
          <Typography
            sx={{
              color: 'grey.main',
              fontSize: '15px',
              fontWeight: '400',
              pb: 2,
              borderBottom: '1px solid #E8E8E8',
            }}
          >
            Артикул: {product.sku}
          </Typography>
          <Box display='flex' alignItems='center' my={2.5}>
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
                      dispatch(
                        addToCart(product, product?.databaseId, quantity)
                      )
              }
              sx={{
                color: 'common.white',
                py: 1.5,
                px: 3.5,
              }}
            >
              {alreadyAddedToCart ? 'В КОРЗИНЕ' : 'ДОБАВИТЬ В КОРЗИНУ'}
            </Button>
          </Box>
          <ProductCardAccordion />
        </Box>
      </Box>
      <Grid container spacing={3} sx={{ marginBottom: '90px' }}>
        <Grid item xs={12} lg={5}>
          {product?.description && (
            <Box sx={{ mb: 5 }}>
              <SectionTitle title='Описание' />
              {product?.description}
            </Box>
          )}
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
                ></Typography>
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
                  {product.sku}
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
                ></Typography>
              </Box>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} lg={7}>
          <SectionTitle title='С этим товаром рекомендуют' />
          <NewProductsList
            data={product.related.nodes.slice(0, 3)}
            productCard2
          />
        </Grid>
      </Grid>
      <Box fontWeight={600} fontSize={25} lineHeight='34px' mb={2}>
        Похожие товары
      </Box>
      <NewProductsList data={product.related.nodes} productCard />
      <Box mb={4} pb={4} />
    </Box>
  )
}

export default ProductCard
