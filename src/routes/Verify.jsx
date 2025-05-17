import React from 'react'
import Nav from '../components/Nav'
import { Footer } from '../sections'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const Verify = () => {

    const navigate = useNavigate()

    const {  backendUrl } = useContext(ShopContext)
    const [searchParams , setSearchParams] = useSearchParams()

    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')

    const verifyPayment = async() => {
        try {
            
            const response = await fetch(backendUrl+'/order/verifyStripe' , {
                body: JSON.stringify({ orderId , success}),
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                credentials: 'include'
            })
            if(response.status === 201){
                navigate('/orders')
            } else {
                navigate('/cart')
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        verifyPayment()
    })

  return (
    <div>
        <Nav/>
            <div>
                Verify
            </div>
        <Footer/>
    </div>
  )
}

export default Verify