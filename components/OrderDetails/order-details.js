import React from 'react'
import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { formatPrice } from 'utility/formatPrice'

const OrderDetails = ({ length, total, deliveryPrice, subtotal }) => {
  const purchaseAmount = useSelector((state) => state.purchaseAmount)
  const cart = useSelector((state) => state.cart)
  return (
    <Box
      sx={{
        border: '1px solid #E8E8E8',
        boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box
        sx={{
          padding: '16px',
          borderBottom: '2px dashed #E8E8E8',
          boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.1)',
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
              fontSize: { xs: '13px', md: '17px' },
              fontWeight: 600,
              color: 'text.primary',
            }}
          >
            ПОДЫТОГ:
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '13px', md: '17px' },
              fontWeight: 600,
              color: 'text.primary',
            }}
          >
            {formatPrice(subtotal || purchaseAmount?.subtotal?.price)}
          </Typography>
        </Box>
        {/* <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '7px',
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '13px', md: '17px' },
              fontWeight: 400,
              color: 'grey.main',
              fontStyle: 'italic',
            }}
          >
            Кэшбэк:
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '13px', md: '17px' },
              fontWeight: 400,
              color: 'grey.main',
              fontStyle: 'italic',
            }}
          >
            -5 000 
          </Typography>
        </Box> */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '7px',
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '13px', md: '17px' },
              fontWeight: 400,
              color: 'grey.main',
              fontStyle: 'italic',
            }}
          >
            Скидка:
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '13px', md: '17px' },
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
              fontSize: { xs: '13px', md: '17px' },
              fontWeight: 400,
              color: 'grey.main',
              fontStyle: 'italic',
            }}
          >
            Товаров:
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '13px', md: '17px' },
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
              fontSize: { xs: '13px', md: '17px' },
              fontWeight: 400,
              color: 'grey.main',
              fontStyle: 'italic',
            }}
          >
            Доставка:
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '13px', md: '17px' },
              fontWeight: 400,
              color: 'grey.main',
              fontStyle: 'italic',
            }}
          >
            {formatPrice(deliveryPrice || purchaseAmount?.delivery?.price)}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{ padding: '16px', boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.1)' }}
      >
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
              fontSize: { xs: '13px', md: '18px' },
              color: 'text.primary',
            }}
          >
            ИТОГО:
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: '13px', md: '18px' },
              color: 'text.primary',
            }}
          >
            {formatPrice(total || purchaseAmount?.total?.price)}
          </Typography>
        </Box>
        {/* <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '7px',
          }}
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { xs: '13px', md: '18px' },
              color: 'btn.main',
              fontStyle: 'italic',
            }}
          >
            Кэшбэк на карту:
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { xs: '13px', md: '18px' },
              color: 'btn.main',
              fontStyle: 'italic',
            }}
          >
            + 4 672 
          </Typography>
        </Box> */}
      </Box>
    </Box>
  )
}

export default OrderDetails
