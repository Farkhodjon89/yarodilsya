import React from 'react'
import Layout from '../../components/Layout/layout'
import Breadcrumb from '../../components/Breadcrumbs/breadcrumbs'
import SectionTitle from '../../components/SectionTitle/section-title'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { sliderBanners } from '../../slider-banners'
import useMediaQuery from '@mui/material/useMediaQuery'
import { client } from '../../apollo-client'
import { CATEGORIES } from '../../graphql/categories'
import { CATEGORY } from '../../graphql/category'
import { useRouter } from 'next/router'
import ItemsSlider from 'components/ItemsSlider'
import Link from 'components/Link'

export default function Categories({ categories, category }) {
  const router = useRouter()
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('lg'))
  const currentCategory = categories.filter((category) =>
    category.slug === router.query.slug ? category.name : ''
  )

  const breadcrumbs = [
    {
      name: 'Главная',
      slug: '/',
    },
    {
      name: currentCategory[0].name,
      slug: `/catalog/${currentCategory[0].slug}`,
    },
  ]

  return (
    <Layout categories={categories}>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <SectionTitle title={currentCategory[0].name} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          width: '100%',
          justifyContent: 'space-between',
          marginBottom: '90px',
        }}
      >
        <Box sx={{ width: { xs: '100%', md: '25%' } }}>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 600,
              color: 'text.primary',
              marginBottom: '20px',
            }}
          >
            Категории
          </Typography>
          {category?.map(({ id, name, slug }) => (
            <Link
              key={id}
              href={`/catalog/${slug}`}
              sx={{ display: 'block', color: 'btn.main', mb: 2 }}
            >
              {name}
            </Link>
          ))}
        </Box>
        <Box width={{ xs: '100%', lg: '75%' }}>
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
      </Box>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const categories = await client.query({
    query: CATEGORIES,
  })

  const category = await client.query({
    query: CATEGORY,
    variables: {
      id: params.slug,
    },
  })

  return {
    props: {
      categories: categories?.data?.productCategories?.nodes,
      category: category?.data?.productCategory.children.nodes,
    },
  }
}
