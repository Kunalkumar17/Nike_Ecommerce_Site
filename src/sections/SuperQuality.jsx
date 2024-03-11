import React from 'react'
import Button from '../components/Button'
import {shoe8} from '../assets/images'

const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
          <h2 className=' font-palanquin text-4xl capitalize font-bold lg:max-w-lg'> We Provide You
          <span className=' text-coral-red'> Super Quality</span> Shoes
          </h2>
          <p className='mt-4 lg:max-w-lg info-text'>
            Ensuring premium comfort and style, our meticulously crafted shoes are designed to keep you on the move and elevate your experience , providing you with the best quality shoes.  
          </p>
          <p className='mt-6 lg:max-w-lg info-text'>
            Our dedication to quality and craftsmanship is evident in every stitch and every step.
          </p>
          <div className='mt-11'>
            <Button label='View Details'/>
          </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
          <img src={shoe8} alt="shoe8" width={570} height={522} />
      </div>
    </section>
  )
}

export default SuperQuality