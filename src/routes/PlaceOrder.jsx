import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import { Footer } from '../sections'
import { CartTotal } from '../components/CartTotal'
import { razorpay_logo, stripe_logo } from '../assets/icons'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'
import { redirect, useNavigate } from 'react-router-dom'

export const PlaceOrder = () => {

    const navigate = useNavigate()
    const {backendUrl , cartItems  , getCartAmount , delivery_fee, products } = useContext(ShopContext)
    const [method , setMethod] = useState('COD')
    const [formData , setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        street: '',
        city: '',
        state:'',
        zipcode:'',
        country:'',
        phone:''
    })

    const onChangeHandler = (event) =>{
        const name=event.target.name;
        const value = event.target.value

        setFormData(data => ({...data,[name]:value}))
    }

    const initPay = (order) => {
        const options = {
             key :  import.meta.env.VITE_RAZOR_KEY_ID,
             amount : order.amount,
             currency : order.currency,
             name : 'Order Payment',
             description : 'Order Payment',
             order_id : order.id,
             receipt : order.receipt,
             handler: async(response) => {
                console.log(response)
                try {
                    
                    const data = await fetch(backendUrl+'/order/verifyRazorpay',{
                        method: 'POST',
                        credentials: 'include',
                        headers: {
                            'Content-Type' : 'application/json'
                        },
                        body: JSON.stringify(response)
                    })
                    if(data.status === 201){
                        navigate('/orders')
                    }
                } catch (error) {
                    toast.error(error)
                }
             }            
        }
        const rzp = new window.Razorpay(options)
        rzp.open()
    }

    const onSubmitHandler = async(event) =>{
        event.preventDefault();

        try {
            
            let orderItems = []

            for(const items in cartItems){
                for(const item in cartItems[items]){
                    if(cartItems[items][item] > 0){
                        const itemInfo = structuredClone(products.find(product => product._id === items))
                        if(itemInfo){
                            itemInfo.size = item
                            itemInfo.quantity = cartItems[items][item]
                            orderItems.push(itemInfo)
                        }
                    }
                }
            }
            let orderData = {
                address: formData,
                items: orderItems,
                amount: getCartAmount()+ delivery_fee,
            } 

            switch (method) {
                case 'COD':
                    const response = await fetch(backendUrl+'/order/place' , {
                        method: 'POST',
                        credentials:'include',
                        headers: {
                'Content-Type': 'application/json'
            },
                        body: JSON.stringify( orderData )
                    })
                    const data = await response.json();

                    if(data === 'Order Placed'){
                        navigate('/orders')
                    }
                    else {
                        toast.error(data)
                    }
                break;

                case 'stripe':
                    const responseStripe = await fetch(backendUrl+'/order/stripe' , {
                        method: 'POST',
                        credentials:'include',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify( orderData )
                    })
                    const StripeData = await responseStripe.json();
                    if(responseStripe.status === 201){
                        const {session_url} = StripeData
                        window.location.replace(session_url)
                    } else {
                        toast.error(StripeData.message)
                    }

                break;

                case 'razorpay':

                    const responseRazorpay = await fetch(backendUrl+'/order/razorpay',{
                        method: 'POST',
                        credentials: 'include',
                        headers: {
                            'Content-Type' : 'application/json'
                        },
                        body: JSON.stringify(orderData)
                    })

                    const razorData = await responseRazorpay.json()
                    if(responseRazorpay.status === 201){
                        initPay(razorData)
                    }
                    
                break;
            
                default:
                    break;
            }

        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <Nav/>
            <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14  min-h-[80vh] border-t mx-20'>
                <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

                <div className="flex gap-2 items-center">
                    <h1 className="text-2xl max-sm:text-2xl justify-center flex font-serif"><span className='text-gray-500 pr-2'>DELIVERY</span>INFORMATION</h1>
                    <p className="w-6 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
                </div>
                <div className='flex gap-3'>
                    <input onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' required />
                    <input onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' />
                </div>
                <input onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Email address' />
                <input onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
                <div className='flex gap-3'>
                    <input onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
                    <input onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
                </div>
                <div className='flex gap-3'>
                    <input onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Zipcode' />
                    <input onChange={onChangeHandler} name='country' value={formData.country} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
                </div>
                <input onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone' />
                </div>

                <div className='mt-8'>

                    <div className='mt-8 min-w-80'>
                        <CartTotal />
                    </div>

                    <div className='mt-12'>
                        <div className="flex gap-2 items-center">
                            <h1 className="text-md max-sm:text-2xl justify-center flex font-serif"><span className='text-gray-500 pr-2'>PAYMENT</span>METHOD</h1>
                            <p className="w-6 sm:w-8 h-[1px] sm:h-[2px] bg-gray-700"></p>
                        </div>
                        <div className='flex gap-3 flex-col lg:flex-row mt-3'>
                            <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                                <p className={`min-w-3.5 h-3.5 border rounded-full ${ method === 'razorpay' ? 'bg-green-400': ''}`}></p>
                                <img className='h-5 mx-4' src={razorpay_logo} alt="" />
                            </div>
                            <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                                <p className={`min-w-3.5 h-3.5 border rounded-full ${ method === 'stripe' ? 'bg-green-400': ''}`}></p>
                                <img className='h-5 mx-4' src={stripe_logo} alt="" />
                            </div>
                            <div onClick={() => setMethod('COD')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                                <p className={`min-w-3.5 h-3.5 border rounded-full ${ method === 'COD' ? 'bg-green-400': ''}`}></p>
                                <p className='text-gray-500 text-sm font-medium mx-4 '>CASH ON DELIVERY</p>
                            </div>
                        </div>
                        <div className='w-full text-end mt-8'>
                            <button type='submit' className='border text-white bg-black px-16 py-3 text-sm'>PLACE ORDER</button>
                        </div>
                    </div>
                </div>
            </form>
        <Footer/>
    </div>
  )
}