import React from "react";
import Layout from "../components/Layout/layout";
import Breadcrumb from "../components/Breadcrumbs/breadcrumbs";
import SectionTitle from "../components/SectionTitle/section-title";
import CheckoutMain from "../components/Checkout/checkout";
import {client} from "../apollo-client";
import {CATEGORIES} from "../GRAPHQL/categories";

export default function Checkout({categories}) {
  const breadcrumbs = [
    {
      name: 'Главная',
      slug: '/',
    },
    {
      name: 'Оформление заказа',
      slug: `/checkout`,
    },
  ]

  return (
      <Layout categories={categories}>
        <Breadcrumb breadcrumbs={breadcrumbs}/>
        <SectionTitle title='Оформление заказа'/>
        <CheckoutMain />
      </Layout>
  )

}

export async function getStaticProps() {
  const categories = await client.query({
    query: CATEGORIES,
  })

  return{
    props: {
      categories: categories?.data?.productCategories?.nodes
    }
  }
}