import React from 'react'
import Nav from '../components/Nav'
import Footer from '../sections/Footer'
import { SizeInfo } from '../SizeInfo'

const ProductDetailsPage = ( {imgURL , name , price , sizes}) => {
  return (
    <main className='relative'>
        <Nav />
        <section id className='padding-x pt-10 pb-8'>
            <SizeInfo imgURL={imgURL} name = {name} price={price} sizes={sizes} />
        </section>
        <section
            className="bg-black dark:text-white padding-x padding-t pb-8">
            <Footer />
        </section>
    </main>
  )
}

export default ProductDetailsPage