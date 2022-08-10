import React, { useEffect } from 'react'
import Head from 'next/head'
import Header from '../Header/header'
import { Container } from '@mui/material'
import Footer from '../Footer/footer'
import { useDispatch, useSelector } from 'react-redux'
import { purchaseAmount } from 'redux/actions/purchaseAmount'

const Layout = ({ children, categories }) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  useEffect(() => {
    dispatch(purchaseAmount(cart))
  }, [cart, dispatch])
  return (
    <>
      <Head>
        <title>YaRodilsya</title>
        <meta name='description' content='YaRodilsya description here.' />
      </Head>
      <Header categories={categories} />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
