import React, { useEffect, useState } from 'react'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import createEmotionCache from '../utility/createEmotionCache'
import { theme } from '../theme'
import { Provider, useStore } from 'react-redux'
import '../styles/globals.css'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { useRouter } from 'next/router'
import Loader from 'components/Loader'

const clientSideEmotionCache = createEmotionCache()

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) => {
  const store = useStore(pageProps.initialReduxState)
  const persistor = persistStore(store, {}, function () {
    persistor.persist()
  })

  const router = useRouter()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    router.events.on('routeChangeStart', start)
    router.events.on('routeChangeComplete', end)
    router.events.on('routeChangeError', end)
    return () => {
      router.events.off('routeChangeStart', start)
      router.events.off('routeChangeComplete', end)
      router.events.off('routeChangeError', end)
    }
  }, [router.events])

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <PersistGate loading={<Loader />} persistor={persistor}>
            {loading || router.isFallback ? (
              <Loader />
            ) : (
              <Component {...pageProps} key={router.asPath} />
            )}
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
