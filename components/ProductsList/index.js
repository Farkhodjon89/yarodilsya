import Image from 'next/image'
import { useRouter } from 'next/router'
import { Grid, Box } from '@mui/material'
import formatPrice from 'utilities/FormatPrice'
import Link from 'components/Link'
import Plus from 'public/icons/Plus'

const ProductsList = ({ products = [], like, homeSlug }) => {
  const router = useRouter()
  return (
    <>
      {like && (
        <Box sx={{ fontWeight: 600, fontSize: 20, textAlign: 'center', mb: 4 }}>
          Вам может понравиться
        </Box>
      )}
      <Grid container spacing={{ xs: 2, md: 4 }} sx={{ mb: 4 }}>
        {products.map((product) => (
          <Grid
            item
            xs={6}
            md={4}
            key={product?.databaseId}
            sx={{
              textAlign: {
                xs: 'center',
                md: 'start',
              },
            }}
          >
            <Link href={'/product/' + product.slug}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: {
                    xs: '220px',
                    md:
                      router.pathname === '/catalog/[slug]' ? '330px' : '460px',
                  },
                  mb: 2,
                  '&:hover': { boxShadow: 3 },
                }}
              >
                <Image
                  alt='banner'
                  src={product?.image?.sourceUrl || ''}
                  layout='fill'
                  objectFit='cover'
                  placeholder='blur'
                  blurDataURL={product?.image?.sourceUrl}
                />
                {product.onSale && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(5px)',
                      padding: '5px 10px',
                      fontSize: 12,
                    }}
                  >
                    Скидка
                  </Box>
                )}
              </Box>
              <Box sx={{ fontSize: { xs: 14, md: 16 } }}>{product?.name}</Box>
              <Box
                sx={{
                  display: { xs: 'block', md: 'flex' },
                  alignItems: 'center',
                  fontWeight: 600,
                  fontSize: { xs: 16, md: 18 },
                  my: 1,
                }}
              >
                {product?.onSale ? (
                  <>
                    <Box color='sale'>
                      {formatPrice(product.woocsSalePrice)}
                    </Box>
                    <Box
                      sx={{
                        color: 'gray',
                        ml: { xs: 0, md: 1 },
                        textDecoration: 'line-through',
                        fontSize: 14,
                      }}
                    >
                      {formatPrice(product?.woocsRegularPrice)}
                    </Box>
                  </>
                ) : (
                  formatPrice(product?.woocsRegularPrice)
                )}
              </Box>
              <Box
                sx={{ color: 'secondary.main', fontSize: { xs: 14, md: 16 } }}
              >
                {product?.variations
                  ? product?.variations?.nodes?.map(
                      (variation) => `${variation?.size?.nodes[0]?.value} `
                    )
                  : product?.size?.nodes[0]?.options[0]}
              </Box>
            </Link>
          </Grid>
        ))}
        {homeSlug && (
          <Grid item xs={6} md={4}>
            <Link href={'/catalog/' + homeSlug}>
              <Box
                sx={{
                  backgroundColor: 'secondary.main',
                  color: 'white',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': { boxShadow: 3 },
                }}
              >
                <Box
                  sx={{
                    display: { xs: 'none', md: 'block' },
                    fontWeight: 'bold',
                    mb: 5,
                  }}
                >
                  Показать больше
                </Box>
                <Plus />
                <Box mt={5}>еще 10</Box>
              </Box>
            </Link>
          </Grid>
        )}
      </Grid>
    </>
  )
}

export default ProductsList
