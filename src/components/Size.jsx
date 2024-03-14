import React, { useState } from 'react'


export const Size = ( {size} ) => {
  const [border_color, setBorderColor] = useState('border-grey-300');

  const changeBorderColor = () => {
    if(border_color === 'border-black'){
      setBorderColor('border-grey-300')
    } else {
      setBorderColor('border-black' )
    }
  }

  return (
    <button className={`p-2 w-[90px] border-2 rounded-full m-1  ${border_color}`} onClick={() => (changeBorderColor())}>
    { size }
    </button>
  )
}
