import React from 'react'
import { client } from '../../apollo-client'
import ORDER from '../../graphql/order'
import Layout from '../../components/Layout/layout'
import { CATEGORIES } from '../../graphql/categories'
import Breadcrumb from 'components/Breadcrumbs/breadcrumbs'
import SectionTitle from 'components/SectionTitle/section-title'
import { Box, Button } from '@mui/material'
import Image from 'next/image'
import OrderDetails from 'components/OrderDetails/order-details'
import { formatPrice } from 'utility/formatPrice'
import { useRouter } from 'next/router'

export default function Order({ order, categories }) {
  const { push } = useRouter()
  const breadcrumbs = [
    {
      name: 'Главная',
      slug: '/',
    },
    {
      name: 'Ваш заказ принят',
      slug: `/`,
    },
  ]

  const header = ['МОДЕЛЬ', 'НАИМЕНОВАНИЕ', 'ЦЕНА', 'КОЛИЧЕСТВО', 'ИТОГО']

  const products = order.lineItems.nodes

  return (
    <Layout categories={categories}>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <SectionTitle title='Ваш заказ принят' />
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
              key={item.product.databaseId}
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
                <Image
                  alt={item.product.name}
                  src={item.product.image.sourceUrl}
                  layout='fill'
                />
              </Box>
              <Box flex='0 0 25%' color='#606060'>
                {item.product.name}
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
                {item.product.onSale && (
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
                    {formatPrice(item.product.woocsRegularPrice)}
                  </Box>
                )}
                {formatPrice(
                  item.product.onSale
                    ? item.product.woocsSalePrice
                    : item.product.woocsRegularPrice
                )}
              </Box>
              <Box flex='0 0 20%'>{item.quantity}</Box>
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
                  (item.product.onSale
                    ? item.product.woocsSalePrice
                    : item.product.woocsRegularPrice) * item.quantity
                )}
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
            <Box key={item.product.databaseId}>
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
                    alt={item.product.name}
                    src={item.product.image.sourceUrl}
                    layout='fill'
                  />
                </Box>
                <Box flex='0 0 calc(60% - 45px)' color='#606060'>
                  {item.product.name}
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
                  {item.product.onSale && (
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
                      {formatPrice(item.product.woocsRegularPrice)}
                    </Box>
                  )}
                  {formatPrice(
                    item.product.onSale
                      ? item.product.woocsSalePrice
                      : item.product.woocsRegularPrice
                  )}
                </Box>
              </Box>
              <Box display='flex' alignItems='center' pb={2}>
                <Box width={90} display='flex' justifyContent='center' mr={1}>
                  {item.quantity}
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
                    (item.product.onSale
                      ? item.product.woocsSalePrice
                      : item.product.woocsRegularPrice) * item.quantity
                  )}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Box sx={{ width: { xs: '100%', md: '33%' } }}>
          <Box sx={{ width: '100%' }}>
            <OrderDetails
              length={products.length}
              total={order.total}
              deliveryPrice={order?.shippingLines?.nodes[0]?.total}
              subtotal={order.subtotal}
            />
          </Box>
          <Button
            fullWidth
            variant='contained'
            onClick={() => push('/')}
            sx={{
              py: 1.5,
              px: 3.5,
              mt: 2,
            }}
          >
            ВЕРНУТЬСЯ НА ГЛАВНУЮ
          </Button>
        </Box>
      </Box>
    </Layout>
  )
}

export const getServerSideProps = async ({ params }) => {
  const order = await client.query({
    query: ORDER,
    variables: { id: params.slug },
  })

  const categories = await client.query({
    query: CATEGORIES,
  })

  return {
    props: {
      order: order.data.order,
      categories: categories.data.productCategories.nodes,
    },
  }
}
