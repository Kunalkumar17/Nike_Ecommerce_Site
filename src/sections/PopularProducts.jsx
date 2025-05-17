import React, { useContext, useEffect, useState } from 'react'
import PopularProductCard from '../components/PopularProductCard'
import { ShopContext } from '../context/ShopContext'

const PopularProducts = () => {

  const { products } = useContext(ShopContext)
  const [productData , setProductData] = useState([]);
  useEffect(() => {
    const data = products.slice(0,4);
    setProductData(data)
  }, [products])
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>Our <span className=' text-coral-red'>Popular</span> Products</h2>
        <p className='lg:max-w-lg font-montserrat text-slate-gray'>Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
      </div>

      <div className='mt-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-2 sm:gap-4 gap-14'>
        {productData.map((product) => (
          <a href={`product-detail/${product._id}`} key={product._id}>
            <PopularProductCard {...product} />
          </a>
        ))}
      </div>

    </section>
  )
}

export default PopularProducts