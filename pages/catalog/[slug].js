import React, { useEffect, useState } from 'react'
import Layout from '/components/Layout/layout'
import { Box, Button, Grid, Skeleton } from '@mui/material'
import { client } from 'apollo-client'
import { CATEGORY } from 'graphql/category'
import { CATEGORIES } from 'graphql/categories'
import { PRODUCTS } from 'graphql/products'
import { useLazyQuery } from '@apollo/client'
import { useFirstRender } from 'hooks/useFirstRender'
import { useRouter } from 'next/router'
import InfiniteScroll from 'react-infinite-scroller'
import Breadcrumb from 'components/Breadcrumbs/breadcrumbs'
import Empty from 'components/Empty/empty'
import SectionTitle from 'components/SectionTitle/section-title'
import NewProductsList from 'components/NewProductsList'
import Cross from 'public/icons/Cross'
import addToArray from 'utility/AddToArray'
import Filters from 'components/Filters'
import Filter from 'public/icons/Filter'

const first = 8

const ButtonComponent = ({ key, action, name }) => (
  <Button
    key={key}
    variant='contained'
    endIcon={
      <Box
        borderRadius='50%'
        backgroundColor='common.white'
        display='flex'
        alignItems='center'
        justifyContent='center'
        p={0.25}
      >
        <Cross />
      </Box>
    }
    onClick={action}
    sx={{
      fontWeight: 400,
      fontSize: 13,
      lineHeight: '18px',
      mr: 1,
      color: '#606060',
      backgroundColor: '#E8E8E8',
      py: 0.5,
      px: 1.5,
      borderRadius: '25px',
      '&:hover': {
        color: '#606060',
        backgroundColor: '#E8E8E8',
      },
    }}
  >
    {name}
  </Button>
)

export default function Catalog({ categories, category, initialData }) {
  const router = useRouter()
  const onSale = !!router?.query?.onSale
  const onSearch = router?.query?.search
  const firstRender = useFirstRender()
  const [openMobileFilter, setOpenMobileFilter] = useState(false)
  const [filters, setFilters] = useState([])
  const [colorTerms, setColorTerms] = useState([])
  const [sizeTerms, setSizeTerms] = useState([])
  const [brandTerms, setBrandTerms] = useState([])
  const [sortBy, setSortBy] = useState('')
  const [val, setVal] = useState({ min: 0, max: 1000000 })
  const [data, setData] = useState({
    products: initialData?.nodes || [],
    endCursor: initialData?.pageInfo?.endCursor,
    hasNextPage: !!initialData?.pageInfo?.hasNextPage,
    colors: initialData?.activeTerms?.paColors,
    sizes: initialData?.activeTerms?.paSizes,
    brands: initialData?.activeTerms?.paBrands,
  })

  const breadcrumbs = [
    {
      databaseId: 'main',
      name: 'Главная',
      slug: '/',
    },
    ...(category?.parent
      ? [
          {
            databaseId: category?.parent?.node?.databaseId,
            name: category?.parent?.node?.name,
            slug: '/catalog/' + category?.parent?.node?.slug,
          },
        ]
      : []),

    {
      databaseId: category?.databaseId,
      name: category?.name,
      slug: '/catalog/' + category?.slug,
    },
  ]

  const [loadData, { data: moreData, loading: loadingData }] = useLazyQuery(
    PRODUCTS,
    {
      client,
      fetchPolicy: 'network-only',
      notifyOnNetworkStatusChange: true,
      onCompleted: () => {
        setData(
          (oldData) =>
            oldData && {
              products: [...oldData?.products, ...moreData?.products?.nodes],
              endCursor: moreData?.products?.pageInfo?.endCursor,
              hasNextPage: moreData?.products?.pageInfo?.hasNextPage,
              colors: moreData?.products?.activeTerms?.paColors,
              sizes: moreData?.products?.activeTerms?.paSizes,
              brands: moreData?.products?.activeTerms?.paBrands,
            }
        )
      },
    }
  )

  const customLoadData = () =>
    loadData({
      variables: {
        first,
        categories:
          category.slug === 'all'
            ? categories?.data?.productCategories?.nodes.map(({ slug }) => slug)
            : [category.slug],
        onSale: onSale,
        after: data?.endCursor || undefined,
        filters: filters.length ? filters : undefined,
        search: onSearch || undefined,
        minPrice: val.min,
        maxPrice: val.max,
        orderBy: sortBy
          ? [
              {
                field: 'PRICE',
                order: sortBy,
              },
            ]
          : undefined,
      },
    })

  useEffect(() => {
    if (!firstRender) {
      setFilters([
        ...(colorTerms.length
          ? [
              {
                taxonomy: 'PACOLOR',
                terms: colorTerms.map((color) => color.slug),
              },
            ]
          : []),
        ...(sizeTerms.length
          ? [
              {
                taxonomy: 'PASIZE',
                terms: sizeTerms.map((size) => size.slug),
              },
            ]
          : []),
        ...(brandTerms.length
          ? [
              {
                taxonomy: 'PABRAND',
                terms: brandTerms.map((brand) => brand.slug),
              },
            ]
          : []),
      ])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorTerms, sizeTerms, brandTerms])

  useEffect(() => {
    if (!firstRender) {
      setData({
        products: [],
        endCursor: '',
        hasNextPage: false,
        colors: [],
        sizes: [],
        brands: [],
      })
      customLoadData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters])

  useEffect(() => {
    if (!firstRender) {
      setData({
        products: [],
        endCursor: '',
        hasNextPage: false,
        colors: [],
        sizes: [],
        brands: [],
      })
      customLoadData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [val])

  useEffect(() => {
    if (onSale) {
      setData({
        products: [],
        endCursor: '',
        hasNextPage: false,
        colors: [],
        sizes: [],
        brands: [],
      })
      customLoadData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onSale])

  useEffect(() => {
    if (onSearch) {
      setData({
        products: [],
        endCursor: '',
        hasNextPage: false,
        colors: [],
        sizes: [],
        brands: [],
      })
      customLoadData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onSearch])

  const sortByItems = [
    {
      value: 'new',
      name: 'Новинке',
    },
    {
      value: 'DESC',
      name: 'Цене ниже',
    },
    {
      value: 'ASC',
      name: 'Цене выше',
    },
    {
      value: 'sale',
      name: 'Скидкам',
    },
  ]

  console.log('val', val)

  return (
    <Layout categories={categories}>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <SectionTitle title={category?.name} />
      <Box
        display={{ xs: 'flex', lg: 'none' }}
        alignItems='center'
        justifyContent='space-between'
        mb={2}
      >
        <Box>
          <select
            name='sort'
            style={{ border: 'none', outline: 'none' }}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value='' disabled defaultValue>
              Сортировать по:
            </option>
            {sortByItems.map((item) => (
              <option value={item.value} key={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </Box>
        <Box
          display='flex'
          alignItems='center'
          sx={{ svg: { mr: 0.5 } }}
          onClick={() => setOpenMobileFilter(true)}
        >
          <Filter /> Фильтр
        </Box>
        {openMobileFilter && (
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
              bgcolor: 'common.white',
              zIndex: 10000,
              py: 2,
              px: 3,
              overflowY: 'auto',
            }}
          >
            <Box
              display='flex'
              alignItems='center'
              justifyContent='space-between'
              mb={3}
              fontWeight={600}
              fontSize={17}
              lineHeight='23px'
            >
              Фильтр
              <Box onClick={() => setOpenMobileFilter(false)}>
                <Cross />
              </Box>
            </Box>
            <Filters
              category={category}
              colors={data?.colors}
              colorTerms={colorTerms}
              setColorTerms={setColorTerms}
              sizes={data?.sizes}
              sizeTerms={sizeTerms}
              setSizeTerms={setSizeTerms}
              brands={data?.brands}
              brandTerms={brandTerms}
              setBrandTerms={setBrandTerms}
              val={val}
              setVal={setVal}
            />
            <Box mt={3} />
            <Button fullWidth onClick={() => setOpenMobileFilter(false)}>
              Показать товары
            </Button>
          </Box>
        )}
      </Box>
      <Grid container spacing={{ xs: 2, md: 4 }} sx={{ mb: 4 }}>
        <Grid item xs={3} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Filters
            category={category}
            colors={data?.colors}
            colorTerms={colorTerms}
            setColorTerms={setColorTerms}
            sizes={data?.sizes}
            sizeTerms={sizeTerms}
            setSizeTerms={setSizeTerms}
            brands={data?.brands}
            brandTerms={brandTerms}
            setBrandTerms={setBrandTerms}
            val={val}
            setVal={setVal}
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <Box display={{ xs: 'none', lg: 'block' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2,
                div: {
                  '&:first-of-type': { color: '#303030' },
                  color: '#999999',
                  mr: 2,
                  cursor: 'pointer',
                },
              }}
            >
              <Box>Cортировать по:</Box>
              {sortByItems.map((item) => (
                <Box
                  key={item.name}
                  onClick={() => setSortBy(item.value)}
                  sx={{
                    textDecoration:
                      sortBy === item.value ? 'underline' : 'none',
                  }}
                >
                  {item.name}
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                mb: 2,
              }}
            >
              {colorTerms.map((color) => (
                <ButtonComponent
                  key={color.databaseId}
                  name={color.name}
                  action={() => addToArray(color, colorTerms, setColorTerms)}
                />
              ))}
              {sizeTerms.map((size) => (
                <ButtonComponent
                  key={size.databaseId}
                  name={size.name}
                  action={() => addToArray(size, sizeTerms, setSizeTerms)}
                />
              ))}
            </Box>
          </Box>
          {loadingData && !data?.products?.length ? (
            <Skeleton />
          ) : data?.products?.length ? (
            <InfiniteScroll
              pageStart={0}
              loadMore={customLoadData}
              hasMore={data?.hasNextPage}
              initialLoad={false}
            >
              <NewProductsList data={data?.products} />
              {loadingData && <Skeleton />}
            </InfiniteScroll>
          ) : (
            <Empty title='Товары не найдены' />
          )}
        </Grid>
      </Grid>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const categories = await client.query({
    query: CATEGORIES,
  })

  let category

  if (params.slug === 'all') {
    category = {
      data: {
        productCategory: {
          databaseId: 'all',
          name: 'Каталог',
          slug: 'all',
          children: { nodes: categories?.data?.productCategories?.nodes },
        },
      },
    }
  } else {
    category = await client.query({
      query: CATEGORY,
      variables: {
        id: params.slug,
      },
    })
  }

  const products = await client.query({
    query: PRODUCTS,
    variables: {
      first,
      categories:
        params.slug === 'all'
          ? categories?.data?.productCategories?.nodes.map(({ slug }) => slug)
          : [params.slug],
    },
  })

  return {
    props: {
      categories: categories?.data?.productCategories?.nodes,
      category: category?.data?.productCategory,
      initialData: products?.data?.products,
    },
  }
}
