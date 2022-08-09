import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import { formatPrice } from 'utility/formatPrice'
import Garbage from 'public/icons/Garbage'
import OrderDetails from '../OrderDetails/order-details'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

const CartMain = ({ products = [], remove }) => {
  const { push } = useRouter()
  const matches = useMediaQuery('(max-width: 600px)')
  const dispatch = useDispatch()
  const productsInfo = [
    {
      id: 0,
      name: 'МОДЕЛЬ',
    },
    {
      id: 1,
      name: 'НАИМЕНОВАНИЕ',
    },
    {
      id: 2,
      name: 'РАЗМЕР',
    },
    {
      id: 3,
      name: 'ЦЕНА',
    },
    {
      id: 4,
      name: 'КОЛИЧЕСТВО',
    },
    {
      id: 5,
      name: 'ИТОГО',
    },
  ]
  const productsInfoMoB = [
    {
      id: 0,
      name: 'МОДЕЛЬ',
    },
    {
      id: 1,
      name: 'НАИМЕНОВАНИЕ',
    },
    {
      id: 2,
      name: 'ЦЕНА',
    },
  ]

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', md: 'row' },
        marginBottom: '50px',
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', md: '65%' },
          marginBottom: { xs: '30px', md: '0' },
        }}
      >
        <Grid container spacing={0} sx={{ cursor: 'pointer' }}>
          {!matches
            ? productsInfo.map(({ id, name }) => (
                <Grid item xs={4} md={2} key={id}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: '10px', md: '13px' },
                      color: 'text.primary',
                      padding: '5px 0',
                      borderBottom: ' 1px solid #E8E8E8',
                    }}
                  >
                    {name}
                  </Typography>
                </Grid>
              ))
            : productsInfoMoB.map(({ id, name }) => (
                <Grid item xs={4} md={2} key={id}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: '10px', md: '13px' },
                      color: 'text.primary',
                      padding: '5px 0',
                      borderBottom: ' 1px solid #E8E8E8',
                    }}
                  >
                    {name}
                  </Typography>
                </Grid>
              ))}
        </Grid>
        {products.map(
          ({
            id,
            image,
            name,
            databaseId,
            woocsRegularPrice,
            woocsSalePrice,
            onSale,
            size,
            selectedQuantity,
          }) => (
            <Grid sx={{ cursor: 'pointer' }} key={id} container spacing={0}>
              <Grid item xs={4} md={2}>
                <Box>
                  <Box sx={{ padding: '10px 0' }}>
                    <Image
                      alt=''
                      src={image.sourceUrl}
                      width={90}
                      height={110}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={4} md={2}>
                <Box>
                  <Typography
                    sx={{
                      padding: '10px 0',
                      fontWeight: 400,
                      fontSize: { xs: '12px', md: '16px' },
                      color: 'grey.main',
                    }}
                  >
                    {name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        display: { xs: 'block', md: 'none' },
                        fontSize: { xs: '12px', md: '16px' },
                        color: 'grey.main',
                      }}
                    >
                      Кол-во:
                    </Typography>
                    <Typography
                      sx={{
                        display: { xs: 'block', md: 'none' },
                        fontWeight: 400,
                        fontSize: '11px',
                        color: 'text.primary',
                      }}
                    >
                      {selectedQuantity}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        display: { xs: 'block', md: 'none' },
                        fontSize: { xs: '12px', md: '16px' },
                        color: 'text.primary',
                      }}
                    >
                      ИТОГО:
                    </Typography>
                    <Typography
                      sx={{
                        display: { xs: 'block', md: 'none' },
                        fontWeight: 600,
                        fontSize: '11px',
                        color: 'text.primary',
                      }}
                    >
                      {formatPrice(
                        (onSale ? woocsSalePrice : woocsRegularPrice) *
                          selectedQuantity
                      )}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={2} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Box>
                  <Typography
                    sx={{
                      padding: '10px 0',
                      fontWeight: 400,
                      fontSize: { xs: '12px', md: '16px' },
                      color: 'grey.main',
                    }}
                  >
                    {size}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4} md={2}>
                <Box>
                  <Typography
                    sx={{
                      padding: '10px 0',
                      fontWeight: 400,
                      fontSize: { xs: '12px', md: '16px' },
                      color: 'grey.main',
                    }}
                  >
                    {formatPrice(onSale ? woocsSalePrice : woocsRegularPrice)}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={2} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Box>
                  <Box sx={{ padding: '10px 0' }}>{selectedQuantity}</Box>
                </Box>
              </Grid>
              <Grid item xs={2} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Box sx={{ display: 'flex' }}>
                  <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Typography
                      sx={{
                        padding: '10px 0',
                        fontWeight: 600,
                        fontSize: '18px',
                        color: 'text.primary',
                      }}
                    >
                      {formatPrice(
                        (onSale ? woocsSalePrice : woocsRegularPrice) *
                          selectedQuantity
                      )}
                    </Typography>
                  </Box>
                  <Box
                    onClick={() => dispatch(remove(databaseId))}
                    sx={{
                      padding: '15px 0',
                      marginLeft: '20px',
                      display: { xs: 'none', md: 'block' },
                    }}
                  >
                    <Garbage />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          )
        )}
      </Box>
      <Box sx={{ width: { xs: '100%', md: '33%' } }}>
        <Box sx={{ width: '100%' }}>
          {/* <AccordionPromoCode /> */}
          <OrderDetails />
        </Box>
        <Button
          fullWidth
          variant='contained'
          onClick={() => push('/checkout')}
          sx={{
            py: 1.5,
            px: 3.5,
            mt: 2,
          }}
        >
          ОФОРМИТЬ ЗАКАЗ
        </Button>
      </Box>
    </Box>
  )
}

export default CartMain
