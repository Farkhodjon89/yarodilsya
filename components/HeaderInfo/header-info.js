import { Box } from '@mui/material'
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
        right: 0,
        top: '-65%',
        a: {
          display: 'flex',
          alignItems: 'center',
          mr: 3,
          color: 'rgba(255, 255, 255, 0.8)',
        },
        svg: {
          mr: 1,
        },
      }}
    >
      <Link href='/'>Магазины</Link>
      <Link href='/'>Доставка</Link>
      <Link href='/'>
        <Percent />
        Кэшбэк
      </Link>
      <Link
        href='tel:+998933781055'
        sx={{
          fontWeight: '600',
          color: 'white !important',
        }}
      >
        <Phone />
        +998 93 378 10 55
      </Link>
    </Box>
  )
}

export default HeaderInfo
