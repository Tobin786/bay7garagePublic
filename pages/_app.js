import React from 'react';



import '../styles/global.css';
import { Layout } from '../components';
import { StateContext } from '../context/StateContext';
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster></Toaster>
        <Component{...pageProps}/>
      </Layout>
    </StateContext>
    )
}

export default MyApp