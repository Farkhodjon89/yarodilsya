import { Box, Button } from '@mui/material'
import Image from 'next/image'
import { formatPrice } from 'utility/formatPrice'
import Garbage from 'public/icons/Garbage'
import OrderDetails from '../OrderDetails/order-details'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import NewSetQuantity from 'components/NewSetQuantity'

const NewSetQuantityItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (item.selectedQuantity) {
      setQuantity(item.selectedQuantity)
    }
  }, [item.selectedQuantity])

  return (
    <NewSetQuantity
      quantity={quantity}
      setQuantity={setQuantity}
      max={item?.stockQuantity}
      id={item?.databaseId}
      justifyContent='start'
    />
  )
}

const CartMain = ({ products = [], remove }) => {
  const { push } = useRouter()
  const dispatch = useDispatch()

  const header = ['МОДЕЛЬ', 'НАИМЕНОВАНИЕ', 'ЦЕНА', 'КОЛИЧЕСТВО', 'ИТОГО']

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
        display={{ xs: 'none', lg: 'block' }}
        width={{ xs: '100%', md: '65%' }}
      >
        <Box display='flex' alignItems='center' width='100%' mb={1}>
          {header.map((item, i) => (
            <Box
              key={item}
              flex={i === 0 ? '0 0 90px' : i === 1 ? '0 0 25%' : '0 0 20%'}
              pr={2.5}
              mr={i === 0 ? 2.5 : 0}
            >
              {item}
            </Box>
          ))}
        </Box>
        {products.map((item) => (
          <Box
            key={item.databaseId}
            sx={{
              display: 'flex',
              width: '100%',
              borderTop: '1px solid #E8E8E8',
              py: 2,
              '& > div': {
                pr: 2.5,
              },
            }}
          >
            <Box
              flex='0 0 90px'
              position='relative'
              height={110}
              borderRadius='8px'
              overflow='hidden'
              mr={2.5}
            >
              <Image alt={item.name} src={item.image.sourceUrl} layout='fill' />
            </Box>
            <Box flex='0 0 25%' color='#606060'>
              {item.name}
            </Box>
            <Box
              flex='0 0 20%'
              sx={{
                fontSize: { xs: 15, lg: 19 },
                lineHeight: { xs: '20px', lg: '26px' },
                fontWeight: 600,
                color: 'text.primary',
              }}
            >
              {item?.onSale && (
                <Box
                  sx={{
                    fontSize: { xs: 15, lg: 16 },
                    lineHeight: { xs: '20px', lg: '22px' },
                    textDecoration: 'line-through',
                    textDecorationColor: 'red',
                    color: '#606060',
                    fontWeight: 400,
                  }}
                >
                  {formatPrice(item?.woocsRegularPrice)}
                </Box>
              )}
              {formatPrice(
                item?.onSale ? item?.woocsSalePrice : item?.woocsRegularPrice
              )}
            </Box>
            <Box flex='0 0 20%'>
              <NewSetQuantityItem item={item} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'auto',
                fontSize: { xs: 15, lg: 19 },
                lineHeight: { xs: '20px', lg: '26px' },
                fontWeight: 600,
                color: 'text.primary',
              }}
            >
              {formatPrice(
                (item?.onSale
                  ? item?.woocsSalePrice
                  : item?.woocsRegularPrice) * item.selectedQuantity
              )}

              <Box
                onClick={() => dispatch(remove(item.databaseId))}
                sx={{ cursor: 'pointer' }}
              >
                <Garbage />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        display={{ xs: 'block', lg: 'none' }}
        width='100%'
        borderBottom='1px solid #E8E8E8'
        mb={2}
        pb={2}
      >
        <Box display='flex' alignItems='center' width='100%' mb={1}>
          {header.slice(0, 3).map((item, i) => (
            <Box
              key={item}
              flex={
                i === 0
                  ? '0 0 90px'
                  : i === 1
                  ? '0 0 calc(60% - 45px)'
                  : '0 0 calc(40% - 45px)'
              }
              pr={1}
              mr={i === 0 ? 1 : 0}
            >
              {item}
            </Box>
          ))}
        </Box>
        {products.map((item) => (
          <Box key={item.databaseId}>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                borderTop: '1px solid #E8E8E8',
                py: 1,
                '& > div': {
                  pr: 1,
                },
              }}
            >
              <Box
                flex='0 0 90px'
                position='relative'
                height={110}
                borderRadius='8px'
                overflow='hidden'
                mr={1}
              >
                <Image
                  alt={item.name}
                  src={item.image.sourceUrl}
                  layout='fill'
                />
              </Box>
              <Box flex='0 0 calc(60% - 45px)' color='#606060'>
                {item.name}
              </Box>
              <Box
                flex='0 0 calc(40% - 45px)'
                sx={{
                  fontSize: { xs: 15, lg: 19 },
                  lineHeight: { xs: '20px', lg: '26px' },
                  fontWeight: 600,
                  color: 'text.primary',
                }}
              >
                {item?.onSale && (
                  <Box
                    sx={{
                      fontSize: { xs: 15, lg: 16 },
                      lineHeight: { xs: '20px', lg: '22px' },
                      textDecoration: 'line-through',
                      textDecorationColor: 'red',
                      color: '#606060',
                      fontWeight: 400,
                    }}
                  >
                    {formatPrice(item?.woocsRegularPrice)}
                  </Box>
                )}
                {formatPrice(
                  item?.onSale ? item?.woocsSalePrice : item?.woocsRegularPrice
                )}
              </Box>
            </Box>
            <Box display='flex' alignItems='center' pb={2}>
              <Box width={90} display='flex' justifyContent='center' mr={1}>
                <NewSetQuantityItem item={item} />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: { xs: 15, lg: 19 },
                  lineHeight: { xs: '20px', lg: '26px' },
                  fontWeight: 600,
                  color: 'text.primary',
                  width: 'calc(100% - 98px)',
                }}
              >
                {formatPrice(
                  (item?.onSale
                    ? item?.woocsSalePrice
                    : item?.woocsRegularPrice) * item.selectedQuantity
                )}

                <Box
                  onClick={() => dispatch(remove(item.databaseId))}
                  sx={{ cursor: 'pointer' }}
                >
                  <Garbage />
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{ width: { xs: '100%', md: '33%' } }}>
        <Box sx={{ width: '100%' }}>
          <OrderDetails cartPage />
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
