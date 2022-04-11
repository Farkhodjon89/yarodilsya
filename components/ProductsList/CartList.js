import Image from 'next/image'
import { Box, Button, Divider, MenuItem, Select } from '@mui/material'
import formatPrice from 'utilities/FormatPrice'
import Link from 'components/Link'
import Trash from 'public/icons/Trash'
import { useDispatch } from 'react-redux'
import { quantityToCart } from 'redux/actions/cart'

const CartList = ({ products = [], remove, cart, cartModal }) => {
  const dispatch = useDispatch()
  return (
    <Box
      sx={{
        width: '100%',
        height: cartModal ? { xs: 310 } : '100%',
        overflowY: cartModal ? 'auto' : 'none',
      }}
    >
      {products.map((product) => {
        const details = (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: {
                xs: 'space-between',
                md: cartModal ? 'space-between' : 'start',
              },
              fontSize: { xs: 14, md: cartModal ? 14 : 16 },
              mt: 2,
            }}
          >
            <Box>{product.selectedColor}</Box>
            <Box mx={2}>{product.selectedSize}</Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Select
                variant='standard'
                value={product.selectedQuantity}
                onChange={(e) => {
                  dispatch(quantityToCart(product.selectedId, e.target.value))
                }}
                sx={{ ml: 1 }}
              >
                {[...Array(product.maxQuantity + 1).keys()]
                  .slice(1)
                  .map((item) => (
                    <MenuItem key={item} value={item}>
                      {item} шт
                    </MenuItem>
                  ))}
              </Select>
            </Box>
          </Box>
        )
        return (
          <Box key={product?.selectedId}>
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <Link
                href={'/product/' + product.slug}
                sx={{
                  position: 'relative',
                  minWidth: {
                    xs: '80px',
                    md: cartModal ? '80px' : '160px',
                  },
                  minHeight: {
                    xs: '80px',
                    md: cartModal ? '80px' : '160px',
                  },
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
              </Link>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  ml: { xs: 2, md: cartModal ? 2 : 4 },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  {product?.name}
                  <Button
                    color='grey'
                    sx={{
                      maxWidth: '100px',
                      '& .MuiButton-startIcon': {
                        display: {
                          xs: 'inherit',
                          md: cartModal ? 'inherit' : 'none',
                        },
                        m: 0,
                      },
                    }}
                    startIcon={<Trash />}
                    onClick={() =>
                      dispatch(
                        remove(cart ? product.selectedId : product.databaseId)
                      )
                    }
                  >
                    <Box
                      sx={{
                        display: {
                          xs: 'none',
                          md: cartModal ? 'none' : 'block',
                        },
                      }}
                    >
                      Удалить
                    </Box>
                  </Button>
                </Box>
                <Box
                  sx={{
                    fontSize: 12,
                    display: { xs: 'none', md: cartModal ? 'none' : 'block' },
                  }}
                >
                  {
                    product?.productCategories?.nodes[
                      product?.productCategories?.nodes?.length - 1
                    ]?.name
                  }
                </Box>
                <Box
                  sx={{
                    display: { xs: 'none', md: cartModal ? 'none' : 'block' },
                  }}
                >
                  {details}
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 600,
                    fontSize: { xs: 14, md: cartModal ? 14 : 18 },
                    mt: 'auto',
                    ml: { xs: 0, md: cartModal ? 0 : 'auto' },
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
                          ml: 1,
                          textDecoration: 'line-through',
                          fontSize: 12,
                        }}
                      >
                        {formatPrice(product?.woocsRegularPrice)}
                      </Box>
                    </>
                  ) : (
                    formatPrice(product?.woocsRegularPrice)
                  )}
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'block', md: cartModal ? 'block' : 'none' },
              }}
            >
              {details}
            </Box>
            <Divider variant='fullWidth' sx={{ my: 2 }} />
          </Box>
        )
      })}
    </Box>
  )
}

export default CartList
