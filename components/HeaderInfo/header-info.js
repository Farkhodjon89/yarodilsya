import React from 'react'
import { Box, Typography } from '@mui/material'
import Link from 'components/Link'
import Percent from '../../public/icons/Percent'
import Phone from '../../public/icons/Phone'

const HeaderInfo = () => {
  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        position: 'absolute',
        right: '2%',
        top: '-65%',
        color: 'rgba(255, 255, 255, 0.8)',
        '&:hover': {
          color: 'rgba(255, 255, 255, 0.8)',
        },
      }}
    >
      <Link
        href='/'
        sx={{ marginRight: '25px', color: 'rgba(255, 255, 255, 0.8)' }}
      >
        Магазины
      </Link>
      <Link
        href='/'
        sx={{ marginRight: '25px', color: 'rgba(255, 255, 255, 0.8)' }}
      >
        Доставка
      </Link>
      <Link
        href='/'
        sx={{ display: 'flex', alignItems: 'center', marginRight: '25px' }}
      >
        <Percent />
        <Typography
          sx={{ marginLeft: '6px', color: 'rgba(255, 255, 255, 0.8)' }}
        >
          Кэшбэк
        </Typography>
      </Link>
      <Link
        href='tel:+998933781055'
        sx={{
          display: 'flex',
          color: 'rgba(255, 255, 255, 0.8)',
          alignItems: 'center',
        }}
      >
        <Phone />
        <Typography sx={{ marginLeft: '6px', fontWeight: '600' }}>
          +998 93 378 10 55
        </Typography>
      </Link>
    </Box>
  )
}

export default HeaderInfo
