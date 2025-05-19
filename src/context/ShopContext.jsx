import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { toast } from 'react-toastify';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

  const currency = "$";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [search , setSearch] = useState('')
  const [products , setproducts] = useState([])
  const [showSearch , setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : {};
  });

  const addToCart = async (itemID, size) => {
  if (!size) {
    toast.error('Select Product Size!');
    return;
  }

  let cartData = structuredClone(cartItems);

  if (cartData[itemID]) {
    cartData[itemID][size] = (cartData[itemID][size] || 0) + 1;
  } else {
    cartData[itemID] = { [size]: 1 };
  }

  setCartItems(cartData);

  try {
    const response = await fetch(backendUrl + '/cart/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ itemID, size }),
      credentials: 'include',
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Add to cart failed:", result);
      toast.error(result.message || "Failed to sync with server");
      return;
    }

    toast.success('Added to cart'); // Only update local cart if server call succeeds

  } catch (error) {
    console.error("Add to cart error:", error);
    toast.error("Server error. Try again later.");
  }
};

  const getCartCount = () => {
    let totalCount = 0;
    for( const items in cartItems){
      for(const item in cartItems[items]){
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
          
        } catch (error) {
          
        }
      }
    }
    return totalCount;
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQuantity = async(itemID, size , quantity) => {
    let cartData = structuredClone(cartItems)

    cartData[itemID][size] = quantity;
    setCartItems(cartData);

    try {
      await fetch(backendUrl+'/cart/update', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({ itemID , size , quantity }),
        credentials: 'include'
      })
    } catch (error) {
      console.log(error)
    }
  }

  const getCartAmount = () => {
    let cartAmount = 0;
    for(const items in cartItems){
      let itemInfo = products.find((product) =>product._id === items);
      for(const item in cartItems[items]){
        try {
          if(cartItems[items][item] >0 ){
            cartAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          
        }
      }
    }
    return cartAmount;
  }

  const getProductData = async() => {
    try {
      const  response = await fetch(backendUrl+'/product/list' , {
        method: 'POST'
      })
      const data = await response.json();
      setproducts(data)
    } catch (error) {
      
    }
  }
  
  const getUserCart = async() => {
      try {
        const response = await fetch(backendUrl+'/cart/get', {
          method: 'POST',
          credentials: 'include',
          headers: {
        'Content-Type': 'application/json'
        }
        })

        const data = await response.json()
        setCartItems(data.cartData)
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
  }

  useEffect(() => {
    getUserCart()
  }, [])

  useEffect(() => {
    getProductData();
  },[])

  const value = {
    products , currency , delivery_fee , search , setSearch , showSearch , setShowSearch , cartItems , addToCart , getCartCount , getCartAmount , backendUrl, updateQuantity
  }

  return (
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider