import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section id='contact-us'
    className='max-container flex flex-col justify-center items-center gap-10 py-24'
    >
      <h3 className='text-4xl font-palanquin font-bold justify-center items-center flex text-center'>
        Sign Up For Our Newsletter
      </h3>
      <div className='flex p-[2px] rounded-full border-2 border-slate-grey xl:w-1/2 items-center'>
        <input
        className='flex-1 outline-none border-none bg-transparent text-md'
        placeholder='Subscribe@nike.com'
        type='text'
/>
        <div className='max-sm:pr-[6px]'>
          <Button label="Sign-Up"/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe