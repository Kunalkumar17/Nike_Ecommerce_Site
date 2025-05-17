import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import PopularProductCard from './PopularProductCard';

export const RelatedProducts = ({category}) => {

    const { products } = useContext(ShopContext);
    const [related , setRelated] = useState([])

    useEffect(() => {
        if(products.length > 0){
            let productsCopy = products.slice();

            productsCopy = productsCopy.filter((item) => category === item.category)
            setRelated(productsCopy.slice(0,5));
        }
    }, [products])

  return (
    <div className='my-24 mx-20'>
        <div className="flex gap-2 items-center justify-center">
          <h1 className="text-3xl max-sm:text-2xl justify-center flex font-serif"><span className='text-gray-500 pr-2'>RELATED</span>PRODUCTS</h1>
          <p className="w-6 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {related.map((item,index) => (
          <a href={`/product-detail/${item._id}`} key={index}>
            <PopularProductCard {...item} />
          </a>
        ))}
      </div>
    </div>
  )
}
