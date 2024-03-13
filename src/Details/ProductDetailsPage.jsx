import React from 'react'
import Nav from '../components/Nav'
import { products } from '../constants'
import { Size } from '../components/Size'

const ProductDetailsPage = ( {imgURL , name , price , sizes}) => {
  return (
    <main>
        <Nav />
        <section className='border-4 pt-32 pl-3 relative lg:flex gap-20'>
            <div>
                <div className=' flex'>
                    <img src={imgURL} alt={name} width={400} height={400} />
                </div>
            </div>
            <div>
                <h1 className='font-palanquin text-2xl'>{name}</h1>
                <p className='font-montserrat text-slate-black mt-3 font-bold' >MRP: {price}</p>
                <p className='text-slate-gray font-palanquin'>Incl. of taxes</p>                    
                <h1 className=' mt-4 font-bold'>Select Size</h1>
                <div className=' mt-4 ml-[-5px] gap-2 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2'>
                    {sizes.map((size) => (
                        <div className=''> 
                            <Size size={size} />  
                        </div>                            
                    ))}
                </div>
            </div>
        </section>
    </main>
  )
}

export default ProductDetailsPage