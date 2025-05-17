import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { search_icon } from '../assets/icons'
import { cross_icon } from '../assets/images'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
  const [visible , setVisible] = useState(false)
  const location = useLocation();

  useEffect(() => {
      if(location.pathname.includes('collection') && showSearch){
        setVisible(true)
      }else{
        setVisible(false)
      }
  }, [location])

  return showSearch && visible? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 my-2 rounded-full w-3/4 sm:w-1/2'>
      <input
        className='flex-1 outline-none border-none bg-transparent text-sm'
        placeholder='Search'
        aria-label='Search products'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type='text'
/>
        <img className='w-5' src={search_icon} alt="" />
      </div>
      <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer ml-4' src={cross_icon} alt="" />
    </div>
  ) : null
}

export default SearchBar
