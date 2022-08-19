import Layout from '../components/Layout/layout'
import { brands } from '../brands'
import { sliderBanners } from '../slider-banners'
import Categories from '../components/Categories/categories'
import Banners from '../components/Banners/banners'
import { client } from '../apollo-client'
import { CATEGORIES } from '../graphql/categories'
import { PRODUCTS } from '../graphql/products'
import SliderProducts from 'components/NewProductsList/SliderProducts'
import ItemsSlider from 'components/ItemsSlider'
import Link from 'components/Link'
import { Box, useMediaQuery } from '@mui/material'
import Image from 'next/image'

const Home = ({ categories, products, discountedProducts }) => {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('lg'))
  return (
    <Layout categories={categories}>
      <Box
        sx={{
          mt: 1,
          py: { xs: 0.5, lg: 1.5 },
          borderBottom: '2px solid rgba(221, 221, 221, 0.5)',
        }}
      >
        <ItemsSlider slidesToShow={mobile ? 3 : 6}>
          {categories.map(({ databaseId, name, slug }) => (
            <Link
              key={databaseId}
              href={`/catalog/${slug}`}
              sx={{
                display: 'flex !important',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                height: '100%',
                textTransform: 'uppercase',
                '&:hover': { color: 'primary.main' },
              }}
            >
              {name}
            </Link>
          ))}
        </ItemsSlider>
      </Box>
      <Box
        display={{ xs: 'block', lg: 'flex' }}
        alignItems='center'
        justifyContent='space-between'
        mb={6}
        mt={1}
      >
        <Box
          width={{ xs: '100%', lg: 'calc(100% - 300px)' }}
          mt={{ xs: 0, lg: 2.5 }}
        >
          <ItemsSlider slidesToShow={1} dots>
            {sliderBanners.map(({ mobImage, image }, i) => (
              <Box key={i}>
                <Link
                  href='/catalog'
                  sx={{
                    display: 'block !important',
                    width: '100%',
                    height: { xs: 170, lg: 388 },
                    borderRadius: '8px',
                    position: 'relative',
                  }}
                >
                  <Image
                    alt={mobile ? mobImage : image}
                    src={mobile ? mobImage : image}
                    layout='fill'
                    priority
                  />
                </Link>
              </Box>
            ))}
          </ItemsSlider>
        </Box>
        <Box
          width={{ xs: '100%', lg: 244 }}
          ml={{ xs: 0, lg: 3.5 }}
          mt={{ xs: 4, lg: 0 }}
        >
          <SliderProducts
            title='Товар дня'
            data={products.slice(0, 4)}
            slidesToShow={mobile ? 2 : 1}
          />
        </Box>
      </Box>
      <Categories />
      <SliderProducts title='Хиты продаж' data={products} />
      <Banners
        background={
          'linear-gradient(88.91deg, #FFE36B -14.56%, #FE5555 124.37%);'
        }
      />
      <SliderProducts title='Новинки' data={products} />
      <Banners
        background={'linear-gradient(88.73deg, #4BDBFF 0%, #B35AFF 100.51%);'}
      />
      <SliderProducts title='Скидки' data={discountedProducts} />
      <Banners
        background={
          'linear-gradient(268.89deg, #EA56AE 0.52%, #FF6161 117.37%);'
        }
      />
      <Box my={5}>
        <Box
          sx={{
            fontWeight: 600,
            fontSize: 25,
            lineHeight: '34px',
            mb: 3,
            textAlign: 'start',
          }}
        >
          Бренды в наших магазинах
        </Box>
        <ItemsSlider slidesToShow={mobile ? 4 : 12}>
          {brands.map(({ slug, image, id }) => (
            <Box key={id}>
              <Link
                href={slug}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: '1px solid #E8E8E8',
                  width: 90,
                  height: 70,
                  borderRadius: '8px',
                  position: 'relative',
                }}
              >
                <Image alt={image} src={image} layout='fill' />
              </Link>
            </Box>
          ))}
        </ItemsSlider>
      </Box>
    </Layout>
  )
}

export default Home

export async function getStaticProps() {
  const categories = await client.query({
    query: CATEGORIES,
  })

  const products = await client.query({
    query: PRODUCTS,
    variables: {
      first: 12,
    },
  })
  const discountedProducts = await client.query({
    query: PRODUCTS,
    variables: {
      first: 12,
      onSale: true,
    },
  })

  return {
    props: {
      categories: categories?.data?.productCategories?.nodes,
      products: products?.data?.products?.nodes,
      discountedProducts: discountedProducts.data.products.nodes,
    },
  }
}
