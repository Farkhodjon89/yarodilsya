import React, { useState, useEffect } from 'react'
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Badge,
  Toolbar,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import Burger from '../../public/icons/Burger'
import Link from 'components/Link'
import Login from '../../public/icons/Login'
import Wishlist from '../../public/icons/Wishlist'
import Cart from '../../public/icons/Cart'
import Close from '../../public/icons/Close'
import HeaderInfo from '../HeaderInfo/header-info'
import LoginMobile from '../../public/icons/LoginMobile'
import WishlistMobile from '../../public/icons/WishlistMobile'
import CartMobile from '../../public/icons/CartMobile'
import BurgerMobile from '../../public/icons/BurgerMobile'
import useMediaQuery from '@mui/material/useMediaQuery'
import CatalogModal from '../CatalogModal/catalog-modal'
import { useSelector } from 'react-redux'
import Search from '../../public/icons/Search'
import SearchMobile from '../../public/icons/SearchMobile'

const Header = ({ categories }) => {
  const [open, setOpen] = useState(false)
  const matches = useMediaQuery('(max-width: 900px)')
  const [searchQuery, setSearchQuery] = useState('')

  const cart = useSelector((state) => state.cart)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
    } else {
      document.body.style.overflow = 'unset'
      document.body.style.backgroundColor = 'unset'
    }
  })

  return (
    <AppBar
      position='sticky'
      sx={{
        background:
          'linear-gradient(90.01deg, #EA56AE 16.09%, #1F3A8F 84.36%);',
        boxShadow: 'none',
      }}
    >
      <Toolbar
        sx={{
          flexDirection: { xs: 'column', lg: 'row' },
          height: { xs: '110px', lg: '155px' },
        }}
      >
        <Container
          sx={{
            display: { xs: 'flex', lg: 'none' },
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '5px',
            position: 'relative',
          }}
        >
          <Box>
            <Link href='/'>
              <Image alt='' width={143} height={30} src='/logoMob.svg' />
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
            <Link href='/account'>
              <IconButton sx={{ marginLeft: '10px' }}>
                <LoginMobile />
              </IconButton>
            </Link>
            <Link href='/wishlist'>
              <IconButton sx={{ marginLeft: '10px' }}>
                <WishlistMobile />
              </IconButton>
            </Link>
            <Link href='/cart'>
              <IconButton sx={{ marginLeft: '10px' }}>
                <Badge badgeContent={cart.length} color='primary'>
                  <CartMobile />
                </Badge>
              </IconButton>
            </Link>
          </Box>
        </Container>
        <Container
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            position: 'relative',
            top: '15%',
          }}
        >
          <HeaderInfo />
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
              <Link href='/'>
                <Image alt='' width={205} height={60} src='/logo.svg' />
              </Link>
            </Box>
            <Button
              variant='contained'
              sx={{
                backgroundColor: 'btn.main',
                minWidth: { xs: '35px', lg: '162px' },
                display: 'flex',
                padding: { xs: '0', lg: 'unset' },
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: { xs: '35px', lg: '55px' },
                borderRadius: '8px',
                boxShadow: 'none',
                marginLeft: { xs: '0', lg: '15px' },
                '&:hover': {
                  backgroundColor: '#0C2A86 ',
                  boxShadow: 'none',
                },
              }}
              onClick={() => setOpen((prev) => !prev)}
            >
              {matches ? (
                !open ? (
                  <BurgerMobile />
                ) : (
                  <Close />
                )
              ) : !open ? (
                <Burger />
              ) : (
                <Close />
              )}
              <Typography
                sx={{
                  marginLeft: '15px',
                  display: { xs: 'none', lg: 'block' },
                  textTransform: 'capitalize',
                  fontSize: 23,
                  fontWeight: 400,
                }}
              >
                Каталог
              </Typography>
            </Button>
          </Box>
          <CatalogModal
            mainCategories={categories}
            open={open}
            setOpen={setOpen}
          />
          <Box sx={{ position: 'relative' }}>
            <TextField
              label='Поиск нужного товара...'
              variant='outlined'
              color='white'
              size={matches ? 'small' : 'normal'}
              InputLabelProps={{
                style: { color: 'rgba(255, 255, 255, 0.8)' },
              }}
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                right: '20px',
                top: '30%',
                cursor: 'pointer',
              }}
            >
              {matches ? <SearchMobile /> : <Search />}
            </Box>
          </Box>

          <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
            <Link href='/account'>
              <IconButton sx={{ marginLeft: '10px' }}>
                <Login />
              </IconButton>
            </Link>
            <Link href='/wishlist'>
              <IconButton sx={{ marginLeft: '10px', boxShadow: 'none' }}>
                <Wishlist />
              </IconButton>
            </Link>
            <Link href='/cart'>
              <IconButton sx={{ marginLeft: '10px' }}>
                <Badge badgeContent={cart.length} color='primary'>
                  <Cart />
                </Badge>
              </IconButton>
            </Link>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Header
