import '../styles/global.scss'
import { Fragment } from 'react'
import Head from 'next/head'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-101662484-4"></script>
        <script dangerouslySetInnerHTML={
        {__html:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments)}
          gtag("js", new Date());
          gtag("config", "UA-101662484-4");
        `}
        }>
        </script>
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}