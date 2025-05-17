import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

export const CartTotal = () => {

    const { currency , delivery_fee , getCartAmount} = useContext(ShopContext)

  return (
    <div className='w-full'>
        <div className="flex gap-2 items-center">
            <h1 className="text-2xl max-sm:text-2xl justify-center flex font-serif"><span className='text-gray-500 pr-2'>YOUR</span>CART</h1>
            <p className="w-6 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>

        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency} {getCartAmount()}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p>{currency} {delivery_fee}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <b>Total</b>
                <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount()+delivery_fee}</b>
            </div>

        </div>
    </div>
  )
}
