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
import Script from 'next/script'
let persistor = persistStore(store);
const App = ({ Component, pageProps }) => {
  const [Loading, setLoading] = React.useState(false)
  const router = useRouter()

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FlashScreen>
          <Head>
            <link rel="icon" type="image/png" sizes="32x39" href="/favicon.png" />
            <title>ERP/API Solution and Service Provider,Goa,Pune and Delhi</title>
            <meta charset="UTF-8" />
            <meta name="description" content="ERP/API Solution and Service Provider,Goa,Pune and Delhi"></meta>
            <meta name="keywords" content="ERP implemention and support,Oracle JDEdward,software developement,RFID,RFID solutions,data process automation,website developement,real time tracking monitoring system,IOT,IOT solution,customized/application program interface developer,Data analytical/analyst,school Management,SMS,spot billing system " />
            <meta name="author" content="Kamsoft technologies, Goa" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />

            <meta name="title" content="Kamsoft technologies" />
            <meta name="language" content="English" />

          </Head>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-105794184-1', 'auto');
          ga('send', 'pageview');
        `}
      </Script>

          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>

        </FlashScreen>
      </PersistGate>
    </Provider>

  )
}

export default App