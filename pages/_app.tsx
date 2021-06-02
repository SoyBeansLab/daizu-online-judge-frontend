import '../styles/globals.css';
import './_app.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import HeaderContainer from '~/common/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap' rel='stylesheet' />
      </Head>
      <HeaderContainer />
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
