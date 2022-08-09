import React from 'react'
import Layout from '../../components/Layout/layout'
import Breadcrumb from '../../components/Breadcrumbs/breadcrumbs'
import ProductCard from '../../components/ProductCard/product-card'
import { client } from '../../apollo-client'
import { PRODUCT } from '../../graphql/product'
import { CATEGORIES } from '../../graphql/categories'

export default function Product({ product, categories }) {
  const breadcrumbs = [
    {
      name: 'Главная',
      slug: '/',
    },
    {
      name: product.name,
      slug: product.slug,
    },
  ]

  return (
    <Layout categories={categories}>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <ProductCard product={product} />
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const categories = await client.query({
    query: CATEGORIES,
  })

  const product = await client.query({
    query: PRODUCT,
    variables: { id: params.slug },
  })

  return {
    props: {
      product: product?.data?.product,
      categories: categories?.data?.productCategories?.nodes,
    },
  }
}
