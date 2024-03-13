import React, { useState } from 'react'


export const Size = ( {size} ) => {
  const [border_color, setBorderColor] = useState('border-grey-300');
  return (
    <button className={`p-2 w-[100px] border-2 rounded-full m-1  ${border_color}`} onClick={() => setBorderColor('border-black')}>
    { size }
    </button>
  )
}
