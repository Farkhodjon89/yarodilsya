import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { formatPrice } from 'utility/formatPrice'
import Accordion from 'components/Accordion/Accordion'

const OrderDetails = ({
  length,
  total,
  deliveryPrice,
  subtotal,
  cartPage,
  checkout,
}) => {
  const purchaseAmount = useSelector((state) => state.purchaseAmount)
  const cart = useSelector((state) => state.cart)
  return (
    <>
      {checkout && (
        <Box
          fontWeight={600}
          fontSize={{ xs: 17, lg: 23 }}
          lineHeight={{ xs: '23px', lg: '31px' }}
          mb={2}
        >
          Ваш заказ
        </Box>
      )}
      <Box
        sx={{
          border: '1px solid #E8E8E8',
          boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          mb: cartPage ? 0 : 6,
        }}
      >
        {cartPage && (
          <>
            <Box
              px={2}
              borderBottom='1px solid #E8E8E8'
              sx={{
                '& .MuiAccordionDetails-root': {
                  p: 0,
                },
              }}
            >
              <Accordion
                title={
                  <Box
                    fontWeight={600}
                    fontSize={17}
                    lineHeight='23px'
                    color='#1F3A8F'
                  >
                    Промокод
                  </Box>
                }
              >
                <Box display='flex' mb={2}>
                  <TextField
                    variant='outlined'
                    placeholder='Введите № купона'
                    fullWidth
                    sx={{
                      '& .MuiInputBase-root': {
                        borderRadius: '8px',
                      },
                      '& .MuiInputBase-input': {
                        padding: { xs: '8.5px 14px', lg: '13.5px 14px' },
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        border: '1px solid #E8E8E8',
                      },
                    }}
                  />
                  <Button
                    sx={{
                      height: { xs: 40, lg: 50 },
                      minWidth: { xs: 110, lg: 135 },
                      background: '#203B90',
                      borderRadius: '8px',
                      ml: 2,
                      '&:hover': {
                        background: '#203B90',
                      },
                    }}
                  >
                    Применить
                  </Button>
                </Box>
              </Accordion>
            </Box>
            <Box
              px={2}
              borderBottom='1px solid #E8E8E8'
              sx={{
                '& .MuiAccordionDetails-root': {
                  p: 0,
                },
              }}
            >
              <Accordion
                title={
                  <Box
                    fontWeight={600}
                    fontSize={17}
                    lineHeight='23px'
                    color='#1F3A8F'
                  >
                    Оплатить часть суммы кэшбэком
                  </Box>
                }
              >
                <Box display='flex'>
                  <TextField
                    variant='outlined'
                    placeholder='Введите сумму'
                    fullWidth
                    sx={{
                      '& .MuiInputBase-root': {
                        borderRadius: '8px',
                      },
                      '& .MuiInputBase-input': {
                        padding: { xs: '8.5px 14px', lg: '13.5px 14px' },
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        border: '1px solid #E8E8E8',
                      },
                    }}
                  />
                  <Button
                    sx={{
                      height: { xs: 40, lg: 50 },
                      minWidth: { xs: 110, lg: 135 },
                      background: '#203B90',
                      borderRadius: '8px',
                      ml: 2,
                      '&:hover': {
                        background: '#203B90',
                      },
                    }}
                  >
                    Применить
                  </Button>
                </Box>
                <Box
                  fontStyle='italic'
                  fontWeight={400}
                  fontSize={14}
                  lineHeight='19px'
                  color='#606060'
                  mt={0.5}
                  mb={1}
                >
                  Оплатить можно не более 50% от стоимости товара
                </Box>
                <Box
                  sx={{
                    background:
                      'linear-gradient(89.06deg, #EA56AE 0.09%, #1F3A8F 99.87%)',
                    boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                    width: '100%',
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: '19px',
                    color: '#FFFFFF',
                    p: '10.5px 9.5px',
                    textAlign: 'center',
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  Баланс кэшбэка: <span>{formatPrice(0)}</span>
                </Box>
              </Accordion>
            </Box>
          </>
        )}
        <Box
          sx={{
            p: 2,
            borderBottom: '2px dashed #E8E8E8',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '14px',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '14px', md: '17px' },
                fontWeight: 600,
                color: 'text.primary',
              }}
            >
              ПОДЫТОГ:
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '14px', md: '17px' },
                fontWeight: 600,
                color: 'text.primary',
              }}
            >
              {formatPrice(subtotal || purchaseAmount?.subtotal?.price)}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '7px',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '14px', md: '17px' },
                fontWeight: 400,
                color: 'grey.main',
                fontStyle: 'italic',
              }}
            >
              Кэшбэк:
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '14px', md: '17px' },
                fontWeight: 400,
                color: 'grey.main',
                fontStyle: 'italic',
              }}
            >
              {formatPrice(0)}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '7px',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '14px', md: '17px' },
                fontWeight: 400,
                color: 'grey.main',
                fontStyle: 'italic',
              }}
            >
              Скидка:
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '14px', md: '17px' },
                fontWeight: 400,
                color: 'grey.main',
                fontStyle: 'italic',
              }}
            >
              {formatPrice(purchaseAmount?.sale?.price)}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '7px',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '14px', md: '17px' },
                fontWeight: 400,
                color: 'grey.main',
                fontStyle: 'italic',
              }}
            >
              Товаров:
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '14px', md: '17px' },
                fontWeight: 400,
                color: 'grey.main',
                fontStyle: 'italic',
              }}
            >
              {length || cart?.length} шт
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '7px',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '14px', md: '17px' },
                fontWeight: 400,
                color: 'grey.main',
                fontStyle: 'italic',
              }}
            >
              Доставка:
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '14px', md: '17px' },
                fontWeight: 400,
                color: 'grey.main',
                fontStyle: 'italic',
              }}
            >
              {formatPrice(deliveryPrice || purchaseAmount?.delivery?.price)}
            </Typography>
          </Box>
        </Box>
        <Box p={2}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '7px',
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: '14px', md: '18px' },
                color: 'text.primary',
              }}
            >
              ИТОГО:
            </Typography>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: '14px', md: '18px' },
                color: 'text.primary',
              }}
            >
              {formatPrice(total || purchaseAmount?.total?.price)}
            </Typography>
          </Box>
        </Box>
      </Box>
      {(checkout || !cartPage) && (
        <>
          <Box
            fontWeight={600}
            fontSize={{ xs: 17, lg: 23 }}
            lineHeight={{ xs: '23px', lg: '31px' }}
            mb={2}
          >
            Способ доставки
          </Box>
          <Box
            sx={{
              border: '1px solid #E8E8E8',
              boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              p: 2.5,
            }}
          >
            <Box
              fontWeight={600}
              fontSize={{ xs: 13, lg: 17 }}
              lineHeight={{ xs: '18px', lg: '23px' }}
              mb={2}
            >
              Доставка курьером
            </Box>
            <Typography
              sx={{
                fontSize: { xs: '14px', md: '17px' },
                fontWeight: 400,
                color: 'grey.main',
                fontStyle: 'italic',
                mb: 1,
              }}
            >
              - При заказе от 50 000 сум стоимость доставки 15 000 сум.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '14px', md: '17px' },
                fontWeight: 400,
                color: 'grey.main',
                fontStyle: 'italic',
                mb: 1,
              }}
            >
              - При заказе до 50 000 сум стоимость доставки 20 000 сум.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '14px', md: '17px' },
                fontWeight: 400,
                color: 'grey.main',
                fontStyle: 'italic',
                mb: 1,
              }}
            >
              - Заказы оформленные до 12:00 отправляются в день заказа.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '14px', md: '17px' },
                fontWeight: 400,
                color: 'grey.main',
                fontStyle: 'italic',
                mb: 1,
              }}
            >
              - Заказы оформленные после 12:00 оформляются на следующий день.
            </Typography>
          </Box>
          <Box
            fontWeight={600}
            fontSize={{ xs: 17, lg: 23 }}
            lineHeight={{ xs: '23px', lg: '31px' }}
            my={2}
          >
            Способ оплаты
          </Box>
          <Box
            sx={{
              border: '1px solid #E8E8E8',
              boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              p: 2.5,
            }}
          >
            <Box
              fontWeight={600}
              fontSize={{ xs: 13, lg: 17 }}
              lineHeight={{ xs: '18px', lg: '23px' }}
              mb={2}
            >
              Оплата при доставке
            </Box>
            <Typography
              sx={{
                fontSize: { xs: '14px', md: '17px' },
                fontWeight: 400,
                color: 'grey.main',
                fontStyle: 'italic',
                mb: 1,
              }}
            >
              - Оплата наличными или курьеру картой.
            </Typography>
          </Box>
        </>
      )}
    </>
  )
}

export default OrderDetails
