import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'

const HeroBanner = ({heroBanner}) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'> {heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <h2>{heroBanner.largeText2}</h2>
        <img src={urlFor(heroBanner.image)} alt=''className='hero-banner-image'></img>
        <div>
          
          <Link href={`/product/${heroBanner.product}`}>
            <button type='button'>{heroBanner.buttonText}
              </button>
              </Link> 
              <div className='desc'>
                {heroBanner.desc}
              </div>
       </div>
      </div>
    </div>
    
  )
}

export default HeroBanner