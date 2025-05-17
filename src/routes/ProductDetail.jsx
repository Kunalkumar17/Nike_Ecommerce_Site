import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import Nav from '../components/Nav';
import Footer from '../sections/Footer';
import { RelatedProducts } from '../components/RelatedProducts';


const ProductDetail = () => {

  const { productID } = useParams();
  const { products ,currency , addToCart} = useContext(ShopContext);
  const [ productData , setProductData] = useState(null);
  const [hide , setHide] = useState('hidden')
  const [image, setImage] = useState(null)
  const [size , setSize] = useState('')

    
    const changeHidden = () => {
        if(hide === 'hidden'){
            setHide('nothidden')
            setarrow('&#8743;')
        } else {
            setHide('hidden')
            setarrow
        }
    }

  const fetchProductData = () => {
    products.map((item) => {
      if(item._id === productID){
        setProductData(item)
        setImage(item.image[0]);
        return null;
      }
    })  
  }

  useEffect(() => {
    fetchProductData()
    console.log(productID)
  },[productID,products])


  return (
    <div>
      <Nav/>
    {productData?(
    <section className={`border-t-2 pt-10 mb-10 transition-opacity ease-in duration-500 opacity-100`}>

      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row sm:mx-20'>

        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row sm:sticky sm:top-4'>
          <div className='w-full sm:sticky sm:top-10 h-fit flex sm:flex-row flex-col gap-3'>
            <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
              {productData.image.map((item,index) => (
                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className="w-full sm:w-[80%] h-fit">
            <img src={image} alt="" className="w-full h-auto" />
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
                    {productData.sizes.map((item,index) => (
                      <button onClick={() => setSize(item)} key={index} className={`border py-2 px-4 ${item === size ? 'border-black' :''}`}>{item}</button>
                    ))}
                  </div>
                </div>                 
                <button className='bg-black text-white px-8 py-4 text-sm sm:w-2/3 w-full rounded-3xl hover:bg-gray-900'>Buy Now</button>
                <button onClick={()=> addToCart(productData._id,size)} className='border border-gray-300 px-8 py-4 text-sm sm:w-2/3 w-full rounded-3xl hover:border-black mt-3'>Add To Cart</button>
                <hr className='mt-8 sm:w-4/5' />
                <p className=" text-wrap text-xl flex mt-4 sm:w-4/5">We didn't invent the remix—but considering the material we get to sample, this one's a no-brainer. We took elements from the AJ6, 7 and 8, making them into a completely new shoe that celebrates MJ's first 3-peat championship run. With leather, textile and nubuck details, these sneakers honour one legacy while encouraging you to cement your own.</p>
                <ul className="text-xl mt-10">
                    <li>Colour Shown: White/Neutral Grey/Industrial Blue </li>
                    <li className="mt-3">Style: DZ4475-101</li>
                </ul>
                <div className="font-semibold">
                    <hr className="mt-10 sm:w-4/5"/>
                    <p className="flex justify-between mt-10 text-xl">Delivery & Returns
                    <span className="flex cursor-pointer font-bold" onClick={() =>(changeHidden())}>&#8744;</span></p>
                    <ul className={`${hide} mt-8 ml-3 sm:w-4/5`}>
                            <li>All purchases are subject to delivery fees.</li><br/>
                            <li>• Standard delivery 4–9 business days </li><br/>
                            <li>Orders are processed and delivered Monday–Friday (excluding public holidays)</li><br/>
                            <li>Nike Members enjoy free returns.</li>
                    </ul>
                    <hr className="mt-10 sm:w-4/5"/>
                    <p className="flex justify-between mt-10 text-xl">30 Days Return Policy<span className="flex cursor-pointer font-bold">&#8744;</span></p>
                </div>
            </div>
            </div>

            <div>
              <RelatedProducts category={productData.category}/>
            </div>
            
        </section>) : <div className='min-h-screen opacity-0'></div>}
        <Footer/>
        </div>
  )
}

export default ProductDetail