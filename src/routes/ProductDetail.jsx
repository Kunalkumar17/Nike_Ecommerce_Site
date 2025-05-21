import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import Nav from '../components/Nav';
import Footer from '../sections/Footer';
import { RelatedProducts } from '../components/RelatedProducts';


const ProductDetail = () => {

  const { productID } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [hide, setHide] = useState('hidden')
  const [image, setImage] = useState(null)
  const [size, setSize] = useState('')


  const changeHidden = () => {
    if (hide === 'hidden') {
      setHide('nothidden')
      setarrow('&#8743;')
    } else {
      setHide('hidden')
      setarrow
    }
  }

  const fetchProductData = () => {
    products.map((item) => {
      if (item._id === productID) {
        setProductData(item)
        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData()
    console.log(productID)
  }, [productID, products])


  return (
    <div>
      <Nav />
      {productData ? (
        <section className={`border-t-2 pt-10 mb-10 transition-opacity ease-in duration-500 opacity-100`}>

          <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row sm:mx-20'>

            <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row sm:sticky sm:top-4'>
              <div className='w-full sm:sticky sm:top-10 h-fit flex sm:flex-row flex-col gap-3'>
                <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                  {productData.image.map((item, index) => (
                    <img onMouseEnter={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer rounded-md hover:contrast-[.7]' alt="" />
                  ))
                  }
                </div>
                <div className="w-full sm:w-[80%] h-fit">
                  <img src={image} alt="" className="w-full h-auto rounded-md"/>
                </div>
              </div>
            </div>

            <div className='flex-1 px-6'>
              <h1 className='font-medium text-2xl'>{productData.name}</h1>
              <p className='text-gray-500 font-montserrat font-semibold mt-1'>{productData.category}'s Shoes</p>
              <p className='font-medium text-3xl text-slate-black ' >{currency}{productData.price}</p>
              <p className='text-gray-500 font-montserrat font-semibold text-sm'>Inclusive of all taxes <br />
                (Also includes all applicable duties)</p>
              <div className='flex flex-col gap-4 my-8'>
                <h1 className=' mt-4 font-medium text-lg'>Select Size</h1>
                <div className='gap-2 lg:grid-cols-2 grid-cols-3 grid md:w-2/3 w-full'>
                  {productData.sizes.map((item, index) => (
                    <button onClick={() => setSize(item)} key={index} className={`hover:border-black border py-2 px-4 ${item === size ? 'border-black' : ''}`}>{item}</button>
                  ))}
                </div>
              </div>
              <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-8 py-4 text-sm sm:w-2/3 w-full rounded-3xl hover:bg-gray-900'>Add To Cart</button>
              <hr className='mt-8 sm:w-4/5' />
              <p className=" text-wrap text-xl flex mt-4 sm:w-4/5">We didn't invent the remix—but considering the material we get to sample, this one's a no-brainer. We took elements from the AJ6, 7 and 8, making them into a completely new shoe that celebrates MJ's first 3-peat championship run. With leather, textile and nubuck details, these sneakers honour one legacy while encouraging you to cement your own.</p>
              <ul className="text-xl mt-10">
                <li>Colour Shown: White/Neutral Grey/Industrial Blue </li>
                <li className="mt-3">Style: DZ4475-101</li>
              </ul>
              <div className="font-semibold">
                <hr className="mt-10 sm:w-4/5" />
                <p className="flex justify-between mt-10 text-xl">Delivery & Returns
                  <span className="flex cursor-pointer font-bold" onClick={() => (changeHidden())}>&#8744;</span></p>
                <ul className={`${hide} mt-8 ml-3 sm:w-4/5`}>
                  <li>All purchases are subject to delivery fees.</li><br />
                  <li>• Standard delivery 4–9 business days </li><br />
                  <li>Orders are processed and delivered Monday–Friday (excluding public holidays)</li><br />
                  <li>Nike Members enjoy free returns.</li>
                </ul>
                <hr className="mt-10 sm:w-4/5" />
                <p className="flex justify-between mt-10 text-xl">30 Days Return Policy<span className="flex cursor-pointer font-bold">&#8744;</span></p>
              </div>
            </div>
          </div>

          <div>
            <RelatedProducts category={productData.category} />
          </div>

        </section>) : (
        <div className="min-h-screen px-6 sm:px-20 py-10 animate-pulse">
          <div className="flex flex-col sm:flex-row gap-12">
            {/* Image Skeleton */}
            <div className="flex-1">
              <div className="h-[400px] bg-gray-300 rounded-lg mb-4"></div>
              <div className="flex gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-20 w-20 bg-gray-300 rounded"></div>
                ))}
              </div>
            </div>

            {/* Text / Details Skeleton */}
            <div className="flex-1 space-y-4">
              <div className="h-8 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="h-8 bg-gray-300 rounded w-1/3 mt-4"></div>

              <div className="space-y-2 mt-6">
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="grid grid-cols-3 gap-2 mt-2 w-2/3">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-10 bg-gray-300 rounded"></div>
                  ))}
                </div>
              </div>

              <div className="h-12 bg-gray-300 rounded w-2/3 mt-6"></div>
              <div className="h-12 bg-gray-300 rounded w-2/3 mt-3"></div>
              <div className="h-24 bg-gray-300 rounded w-4/5 mt-10"></div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}

export default ProductDetail