import React from 'react'
import { getServerSideProps } from './api/sanity'

import { Product,FooterBanner,HeroBanner, SearchBar, SearchResults } from '../components'



const Home = ({products, bannerData}) => {

  return (
    <div className="products-heading">
      <SearchBar products = {products}></SearchBar>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}></HeroBanner>
      <div><h1>All Products</h1></div>
      

      <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>
      
      
    <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
    
  )
}

export { getServerSideProps };
export default Home