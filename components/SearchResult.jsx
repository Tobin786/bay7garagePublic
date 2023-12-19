import React from 'react'
import { urlFor } from '../lib/client'
import Link from 'next/link';


const SearchResult = ({result}) => {
  return (
    <Link href={`/product/${result.slug.current}`}>
    <div className="result-card">
        <img src={urlFor(result?.image[0])} className="small-image" />
        <a>{result.name}</a>
        </div>
        </Link>
  )
}

export default SearchResult