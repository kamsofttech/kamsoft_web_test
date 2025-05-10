import React, { Suspense } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/globals.css';
import '../public/flaticon.css';
import '../public/fontawesome/css/all.min.css';
import { withRouter, Router, useRouter } from 'next/router'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import Head from 'next/head';
import MainLayout from '@/components/mainLayout/MainLayout';
import FlashScreen from '@/components/flashScreen/FlashScreen';

let persistor = persistStore(store);
const App = ({ Component, pageProps }) => {
  const [Loading, setLoading] = React.useState(false)
  const router = useRouter()

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FlashScreen>
          <Head>
            {/*<link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />*/}
            <title>Seven Wonders Trading</title>
            <meta charset="UTF-8" />
            <meta name="keywords" content="jam;cadbury chocolate; flavor chocolate; drinking chocolate; chocolates; nestle chocolates" />
            <meta name="author" content="Seven Wonders Trading, Goa" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />

            <meta name="title" content="Seven Wonders Trading" />
            <meta name="language" content="English" />

          </Head>


          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>

        </FlashScreen>
      </PersistGate>
    </Provider>

  )
}

export default App