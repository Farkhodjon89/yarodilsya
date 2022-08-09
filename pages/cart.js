import React from 'react'
import Layout from '../components/Layout/layout'
import Breadcrumb from '../components/Breadcrumbs/breadcrumbs'
import SectionTitle from '../components/SectionTitle/section-title'
import CartMain from '../components/CartMain/cart-main'
import { client } from '../apollo-client'
import { PRODUCTS } from '../graphql/products'
import { CATEGORIES } from '../graphql/categories'
import { useSelector } from 'react-redux'
import Empty from '../components/Empty/empty'
import { removeFromCart } from '../redux/actions/cart'

export default function Cart({ products, categories }) {
  const breadcrumbs = [
    {
      name: 'Главная',
      slug: '/',
    },
    {
      name: 'Корзина',
      slug: `/cart`,
    },
  ]

  const cart = useSelector((state) => state.cart)

  return (
    <Layout categories={categories}>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <SectionTitle title='Корзина' />
      {cart.length ? (
        <CartMain products={cart} remove={removeFromCart} />
      ) : (
        <Empty title='Нет товаров в корзине' />
      )}
    </Layout>
  )
}

export async function getStaticProps() {
  const categories = await client.query({
    query: CATEGORIES,
  })

  // const products = await client.query({
  //   query: PRODUCTS,
  //   variables: {
  //     first: 12
  //   }
  // })

  return {
    props: {
      // products: products?.data?.products?.nodes,
      categories: categories?.data?.productCategories?.nodes,
    },
  }
}
