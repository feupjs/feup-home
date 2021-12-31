import React from 'react';
import withRematch from '../store/withRematch';
import { Provider } from 'react-redux';
import Head from 'next/head';

require('../styles/globals.less');

function App({ Component, pageProps, store, seoData }) {
  return <>
    <Head>
      <title>{seoData?.title || '开课吧'}</title>
      <meta name="keywords" content={seoData?.keywords || ''} />
      <meta name="description" content={seoData?.description || ''} />
      <link rel="icon" href="https://img.kaikeba.com/a/82815192501202xocl.ico" />
    </Head>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
}

export default withRematch(App)
