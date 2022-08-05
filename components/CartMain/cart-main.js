import React, { useState } from 'react'
import {
  Accordion,
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'
import QuantityCount from '../QuantityCount/quantity-count'
import Image from 'next/image'
import formatPrice from '../../utility/FormatPrice'
import Garbage from '../../public/icons/Garbage'
import OrderDetails from '../OrderDetails/order-details'
import AccordionPromoCode from '../AccordionPromoCode/accordion-promo-code'
import NextLink from 'next/link'
import { useDispatch } from 'react-redux'

const CartMain = ({ products = [], remove }) => {
  const matches = useMediaQuery('(max-width: 600px)')
  const [quantity, setQuantity] = useState(1)
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
          ({ id, image, name, databaseId, woocsRegularPrice, size }, index) => (
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
                  {matches ? (
                    <QuantityCount
                      quantity={quantity}
                      setQuantity={setQuantity}
                    />
                  ) : (
                    ''
                  )}
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
                      Цвет:
                    </Typography>
                    <Typography
                      sx={{
                        display: { xs: 'block', md: 'none' },
                        fontWeight: 400,
                        fontSize: '11px',
                        color: 'text.primary',
                      }}
                    >
                      Красный
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        display: { xs: 'block', md: 'none' },
                        fontSize: { xs: '12px', md: '16px' },
                        color: 'grey.main',
                      }}
                    >
                      РАЗМЕР:
                    </Typography>
                    <Typography
                      sx={{
                        display: { xs: 'block', md: 'none' },
                        fontWeight: 400,
                        fontSize: '11px',
                        color: 'text.primary',
                      }}
                    >
                      9-12 мес
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
                      200 215 сум
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
                    {formatPrice(woocsRegularPrice)}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={2} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Box>
                  <Box sx={{ padding: '10px 0' }}>
                    <QuantityCount
                      quantity={quantity}
                      setQuantity={setQuantity}
                    />
                  </Box>
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
                      {formatPrice(woocsRegularPrice)}
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
          <AccordionPromoCode />
          <OrderDetails />
        </Box>
        <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
          <NextLink href='/checkout'>
            <a>
              <Button
                variant='contained'
                sx={{
                  fontSize: { xs: '13px', md: '18px' },
                  width: '300px',
                  height: '50px',
                  borderRadius: '8px',
                }}
              >
                ОФОРМИТЬ ЗАКАЗ
              </Button>
            </a>
          </NextLink>
        </Box>
      </Box>
    </Box>
  )
}

export default CartMain
