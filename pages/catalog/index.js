import {useLazyQuery} from '@apollo/client'
import {useFirstRender} from 'hooks/useFirstRender'
import {useRouter} from 'next/router'
import InfiniteScroll from 'react-infinite-scroller'
import Breadcrumb from "/components/Breadcrumbs/breadcrumbs";
import Empty from "../../components/Empty/empty";
import SectionTitle from "../../components/SectionTitle/section-title";
import ProductsList from "../../components/ProductsList";
import {client} from "../../apollo-client";
import {CATEGORIES} from "../../GRAPHQL/categories";
import Skeleton from "../../components/ProductsList/Skeleton";
import {Grid} from "@mui/material";
import CatalogActions from "../../components/CatalogActions";
import Layout from "../../components/Layout/layout";
import {PRODUCTS} from "../../GRAPHQL/products";
import {useState, useEffect} from "react";

const first = 8

export default function Catalog({categories, initialData}) {
  const router = useRouter()
  const onSale = !!router?.query?.onSale
  const onSearch = router?.query?.search
  const firstRender = useFirstRender()
  const [filters, setFilters] = useState([])
  const [colorTerms, setColorTerms] = useState([])
  const [sizeTerms, setSizeTerms] = useState([])
  const [brandTerms, setBrandTerms] = useState([])
  const [sortBy, setSortBy] = useState('')
  const [data, setData] = useState({
    products: initialData?.nodes || [],
    endCursor: initialData?.pageInfo?.endCursor,
    hasNextPage: !!initialData?.pageInfo?.hasNextPage,
    colors: initialData?.activeTerms?.paColors,
    sizes: initialData?.activeTerms?.paSizes,
    brands: initialData?.activeTerms?.paBrands
  })

  const breadcrumbs = [
    {
      databaseId: 'main',
      name: 'Главная',
      slug: '/',
    },
    // ...(category?.parent
    //     ? [
    //       {
    //         databaseId: category?.parent?.node?.databaseId,
    //         name: category?.parent?.node?.name,
    //         slug: '/catalog/' + category?.parent?.node?.slug,
    //       },
    //     ]
    //     : []),

    {
      // databaseId: category?.databaseId,
      name: 'Каталог',
      slug: '/catalog',
    },
  ]

  const [loadData, {data: moreData, loading: loadingData}] = useLazyQuery(
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
          onSale: onSale,
          after: data?.endCursor || undefined,
          filters: filters.length ? filters : undefined,
          search: onSearch || undefined,
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
        brands: []
      })
      customLoadData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters])

  useEffect(() => {
    if (onSale) {
      setData({
        products: [],
        endCursor: '',
        hasNextPage: false,
        colors: [],
        sizes: [],
        brands: []
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
        brands: []
      })
      customLoadData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onSearch])

  return (
      <Layout categories={categories}>
        <Breadcrumb breadcrumbs={breadcrumbs}/>
        <SectionTitle title='Каталог'/>
        <Grid container spacing={{xs: 2, md: 4}} sx={{mb: 4}}>
          <CatalogActions
              onSale={onSale}
              onSearch={onSearch}
              sortBy={sortBy}
              setSortBy={setSortBy}
              category={categories}
              filters={filters}
              colors={data?.colors}
              colorTerms={colorTerms}
              setColorTerms={setColorTerms}
              sizes={data?.sizes}
              sizeTerms={sizeTerms}
              setSizeTerms={setSizeTerms}
              brands={data?.brands}
              brandTerms={brandTerms}
              setBrandTerms={setBrandTerms}
          />
          <Grid item xs={12} md={9}>
            {loadingData && !data?.products?.length ? (
                <Skeleton/>
            ) : data?.products?.length ? (
                <InfiniteScroll
                    pageStart={0}
                    loadMore={customLoadData}
                    hasMore={data?.hasNextPage}
                    initialLoad={false}
                >
                  <ProductsList products={data?.products}/>
                  {loadingData && <Skeleton/>}
                </InfiniteScroll>
            ) : (
                <Empty title='Товары не найдены'/>
            )}
          </Grid>
        </Grid>
      </Layout>
  )
}

export async function getStaticProps({params}) {
  const categories = await client.query({
    query: CATEGORIES,
  })


  const products = await client.query({
    query: PRODUCTS,
    variables: {
      first: 8
    },
  })

  return {
    props: {
      categories: categories?.data?.productCategories?.nodes,
      initialData: products?.data?.products,
    },
  }
}