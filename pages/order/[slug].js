import React from 'react'
import OrderMain from '../../components/OrderMain/order-main'
import { client } from '../../apollo-client'
import ORDER from '../../graphql/order'
import Layout from '../../components/Layout/layout'
import { CATEGORIES } from '../../graphql/categories'

export default function Order({ order, categories }) {
  return (
    <Layout categories={categories}>
      <OrderMain order={order} />
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
