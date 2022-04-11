import React from 'react';
import {CacheProvider} from '@emotion/react';
import {ThemeProvider, CssBaseline} from '@mui/material';
import createEmotionCache from '../utility/createEmotionCache';
import theme from '../styles/theme/theme';
import {Provider} from 'react-redux'
import '../styles/globals.css';
import {persistStore} from 'redux-persist'
import {useStore} from 'redux/store'
import {PersistGate} from 'redux-persist/integration/react'
import {useRouter} from "next/router";

const clientSideEmotionCache = createEmotionCache();

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

  return (
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <Component {...pageProps} key={router.asPath}/>
            </PersistGate>
          </Provider>
        </ThemeProvider>
      </CacheProvider>
  );
};

export default MyApp;
