import { useRouter } from 'next/router'
import { Grid, Box } from '@mui/material'
import NextLink from 'next/link'
import ProductItem from '../ProductItem/product-item'

const ProductsList = ({ products = [], like, homeSlug }) => {
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
            md={3}
            key={product?.databaseId}
            sx={{
              textAlign: {
                xs: 'center',
                md: 'start',
              },
            }}
          >
            <ProductItem product={product} />
          </Grid>
        ))}
        {homeSlug && (
          <Grid item xs={6} md={4}>
            <NextLink href={'/catalog/' + homeSlug}>
              <a>
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
                  {/*<Plus/>*/}
                  <Box mt={5}>еще 10</Box>
                </Box>
              </a>
            </NextLink>
          </Grid>
        )}
      </Grid>
    </>
  )
}

export default ProductsList
