import Head from 'next/head'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.css'
// own css files here

import "../styles/globals.css";

import apm from '../rum'

export default function MyApp({ Component, pageProps }) {
    return (
        <>     
         <Head>
            <title>Elastic community - events-assistants</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"/> 
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>

        </Head>

            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>

    )
}