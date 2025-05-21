import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Nav from '../components/Nav'
import { Footer } from '../sections'
import { useState } from 'react'

const Orders = () => {

    const { currency, backendUrl } = useContext(ShopContext)
    const [loading, setLoading] = useState(true);

    const [orders, setOrders] = useState([])

    useEffect(() => {
        const getUserOrders = async () => {
            try {
                const response = await fetch(backendUrl + '/order/user', {
                    credentials: 'include',
                    method: 'POST'
                });
                const data = await response.json();
                const allOrderItems = [];

                data.forEach(order => {
                    order.items.forEach(item => {
                        allOrderItems.push({
                            ...item,
                            status: order.status,
                            payment: order.payment,
                            paymentMethod: order.paymentMethod,
                            date: order.date,
                        });
                    });
                });

                setOrders(allOrderItems.reverse());
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getUserOrders();
    }, []);


    const SkeletonLoader = () => (
        <div className="animate-pulse space-y-4">
            {[...Array(3)].map((_, idx) => (
                <div key={idx} className="h-28 bg-gray-200 rounded-md"></div>
            ))}
        </div>
    );

    return (
        <div>
            <Nav />
            <div className='mx-8 sm:mx-20 mt-8 min-h-screen'>
                <div className="flex gap-2 items-center">
                    <h1 className="text-2xl max-sm:text-2xl justify-center flex font-serif">
                        <span className='text-gray-500 pr-2'>MY</span>ORDERS
                    </h1>
                    <p className="w-6 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
                </div>

                <div className='mt-4'>
                    {loading ? (
                        <SkeletonLoader />
                    ) : orders.length > 0 ? (
                        orders.map((item, index) => (
                            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4 '>
                                <div className='flex items-start gap-6 text-sm'>
                                    <img className='w-16 sm:w-20' src={item.image[0]} alt={item.name} />
                                    <div>
                                        <p className='sm:text-base font-medium'>{item.name}</p>
                                        <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                                            <p className='text-lg'>{currency}{item.price}</p>
                                            <p>Quantity : {item.quantity}</p>
                                            <p>Size : {item.size}</p>
                                        </div>
                                        <p className='mt-2'>Date: <span className='text-gray-400'>{new Date(item.date).toDateString()}</span></p>
                                        <p className='mt-2'>Payment: <span className='text-gray-400'>{item.paymentMethod}</span></p>
                                    </div>
                                </div>
                                <div className='md:w-1/2 flex justify-between'>
                                    <div className='flex items-center gap-2'>
                                        <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                                        <p className='text-sm md:text-base'>{item.status}</p>
                                    </div>
                                    <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='text-gray-400'>No orders found.</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Orders