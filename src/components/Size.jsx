import React, { Children } from 'react'

export const Size = ( {size} ) => {
  return (
    <button className='p-2 px-10 border-2 rounded-full m-1  hover:border-black'>
        {size}
    </button>
  )
}
