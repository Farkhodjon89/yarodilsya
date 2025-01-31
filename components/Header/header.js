import React, { useState, useEffect } from 'react'
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Badge,
  Toolbar,
  Typography,
  ClickAwayListener,
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
import { PRODUCTS } from 'graphql/products'
import { useLazyQuery } from '@apollo/client'
import { client } from 'apollo-client'
import CatalogModalMob from 'components/CatalogModalMob/catalog-modal-mob'
import { useRouter } from 'next/router'

const Header = ({ categories }) => {
  const { push } = useRouter()
  const [open, setOpen] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('lg'))
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [loadProducts, { data, loading }] = useLazyQuery(PRODUCTS, {
    client,
  })

  const cart = useSelector((state) => state.cart)
  const wishlist = useSelector((state) => state.wishlist)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
    } else {
      document.body.style.overflow = 'unset'
      document.body.style.backgroundColor = 'unset'
    }
  })

  useEffect(() => {
    if (data && searchQuery.length) {
      setSearchResults(data.products.nodes)
    }
  }, [data, searchQuery.length])

  const searchData = (e) => {
    setOpenSearch(true)
    setSearchResults([])
    setSearchQuery(e.target.value)
    if (e.target.value.length) {
      loadProducts({
        variables: {
          first: 10,
          search: e.target.value,
        },
      })
    }
  }
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
            <Link href='/'>
              <IconButton sx={{ marginLeft: '10px' }} disableRipple>
                <LoginMobile />
              </IconButton>
            </Link>
            <Link href='/wishlist'>
              <IconButton sx={{ marginLeft: '10px' }} disableRipple>
                <Badge badgeContent={wishlist.length} color='primary'>
                  <WishlistMobile />
                </Badge>
              </IconButton>
            </Link>
            <Link href='/cart'>
              <IconButton sx={{ marginLeft: '10px' }} disableRipple>
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
            <Link
              href='/'
              sx={{
                display: { xs: 'none', lg: 'block' },
                position: 'relative',
                width: 205,
                height: 60,
              }}
            >
              <Image alt='' src='/logo.svg' layout='fill' />
            </Link>
            <Button
              variant='contained'
              sx={{
                backgroundColor: 'btn.main',
                minWidth: { xs: '35px', lg: '162px' },
                display: 'flex',
                padding: { xs: '0', lg: 'unset' },
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: { xs: 35, lg: 58 },
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
              {mobile ? (
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
          {mobile ? (
            <CatalogModalMob
              categories={categories}
              open={open}
              setOpen={setOpen}
            />
          ) : (
            <CatalogModal
              mainCategories={categories}
              open={open}
              setOpen={setOpen}
            />
          )}
          <ClickAwayListener onClickAway={() => setOpenSearch(false)}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                ml: { xs: 1, lg: 3 },
                mr: { xs: 0, lg: 1 },
              }}
            >
              <Box
                sx={{
                  input: {
                    width: '100%',
                    height: { xs: 35, lg: 58 },
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    border: 'none',
                    p: { xs: 1, lg: 2 },
                    outline: 'none',
                    fontSize: { xs: 14, lg: 17 },
                    lineHeight: { xs: '19px', lg: '23px' },
                    '&::placeholder': {
                      color: 'rgba(255, 255, 255, 0.8)',
                    },
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.4)',
                    },
                    '&:focus': {
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                    },
                  },
                }}
              >
                <input
                  value={searchQuery}
                  onChange={searchData}
                  onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                      push(`/catalog/all/?search=${e.target.value}`)
                    }
                  }}
                  placeholder='Поиск нужного товара...'
                />
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: 9.5, lg: 19 },
                  right: { xs: 9.5, lg: 19 },
                }}
              >
                {mobile ? <SearchMobile /> : <Search />}
              </Box>
              <Box
                sx={{
                  div: {
                    position: 'absolute',
                    top: { xs: 50, lg: 70 },
                    left: 0,
                    right: 0,
                    width: '100%',
                    height: 'auto',
                    bgcolor: 'common.white',
                    boxShadow: '1',
                    p: 2,
                    pl: 3,
                    borderRadius: 1,
                    color: 'text.primary',
                  },
                }}
              >
                {openSearch &&
                  (loading && !searchResults.length ? (
                    <Box>Загрузка...</Box>
                  ) : searchQuery.length && !searchResults.length ? (
                    <Box> Товары не найдены</Box>
                  ) : searchResults.length ? (
                    <Box>
                      {searchResults.map((item) => (
                        <Link
                          key={item.databaseId}
                          href={`/product/${item.slug}`}
                          sx={{
                            display: 'block',
                            mb: 2,
                            textDecoration: 'underline',
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </Box>
                  ) : null)}
              </Box>
            </Box>
          </ClickAwayListener>

          <Box
            sx={{
              display: { xs: 'none', lg: 'flex' },
              alignItems: 'center',
              a: {
                '&:hover': {
                  path: {
                    fillOpacity: 1,
                  },
                },
              },
            }}
          >
            <Link href='/'>
              <IconButton sx={{ marginLeft: '10px' }} disableRipple>
                <Login />
              </IconButton>
            </Link>
            <Link href='/wishlist'>
              <IconButton
                sx={{ marginLeft: '10px', boxShadow: 'none' }}
                disableRipple
              >
                <Badge badgeContent={wishlist.length} color='primary'>
                  <Wishlist />
                </Badge>
              </IconButton>
            </Link>
            <Link href='/cart'>
              <IconButton sx={{ marginLeft: '10px' }} disableRipple>
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
