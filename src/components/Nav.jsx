import React, { useState, useEffect, useContext } from 'react'
import { down_icon, headerLogo } from '../assets/images'
import { hamburger, search_icon, shopping_bag, user } from '../assets/icons'
import { navLinks } from '../constants'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import SearchBar from './SearchBar'

const Nav = () => {

  const [visible, setVisible] = useState(false);
  const {setShowSearch , getCartCount} = useContext(ShopContext)

  return (
    <div>
      <div className='flex justify-end mr-4 gap-2 font-semibold max-lg:hidden my-2'>
        <NavLink to={'/signup'} className='text-sm hover:text-gray-400 cursor-pointer'>Join Us</NavLink>
        <div className="w-px h-3 bg-gray-500 mt-1" />
        <NavLink to={'/login'} className='text-sm hover:text-gray-400 cursor-pointer'>Sign In</NavLink> 
      </div>
    <header className="py-3 bg-slate-100 w-full z-10">
  <nav className="max-w-7xl mx-auto w-full px-12 flex items-center justify-between">
    
    <Link to="/">
      <img src={headerLogo} alt="Logo" width={130} height={29} />
    </Link>

    <ul className="flex items-center gap-8 max-lg:hidden">
      {navLinks.map((item) => (
  <li key={item.href} className="flex flex-col items-center hover:bg-slate-100 group">
    {item.href.startsWith("#") ? (
      <a href={item.href} className="font-medium text-slate-black">
        {item.label}
      </a>
    ) : (
      <Link to={item.href} className="font-medium text-slate-black">
        {item.label}
      </Link>
    )}
    <hr className="w-2/4 border-none h-[1px] bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </li>
))}
    </ul>

    <div className="flex items-center gap-6 max-lg:hidden">
      <NavLink to={'/collection'} className="rounded-full hover:bg-gray-200 p-2">
        <img className='' onClick={()=>{setShowSearch(true)}} src={search_icon} alt="search-icon" width={20} height={20} />
      </NavLink>
      <div className="group relative inline-block">
        <img className="w-5 cursor-pointer" src={user} alt="user-icon" width={22} height={22} />
        <div className="group-hover:block hidden absolute z-50 pt-6">
          <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-lg">
            <NavLink to={'/Profile'} className="cursor-pointer hover:text-black">My Profile</NavLink>
            <NavLink to={'/orders'} className="cursor-pointer hover:text-black">Orders</NavLink>
            <NavLink to={'/logout'} className="cursor-pointer hover:text-black">Logout</NavLink>
          </div>
        </div>
      </div>
      <Link to={'/cart'} className='relative'>
        <img src={shopping_bag} alt="shopping-bag" width={25} height={25} />
        <p className=' absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
      </Link>
    </div>

    <button className="hidden max-lg:block">
      <div className="flex items-center gap-6">
      <NavLink to={'/collection'} className="rounded-full hover:bg-gray-200 p-2">
        <img className='' onClick={()=>{setShowSearch(true)}} src={search_icon} alt="search-icon" width={20} height={20} />
      </NavLink>
      <div className="group relative inline-block">
        <img className="w-5 cursor-pointer" src={user} alt="user-icon" width={22} height={22} />
        <div className="group-hover:block hidden absolute z-50 pt-6">
          <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-lg">
            <NavLink to={'/Profile'} className="cursor-pointer hover:text-black">My Profile</NavLink>
            <NavLink to={'/orders'} className="cursor-pointer hover:text-black">Orders</NavLink>
            <NavLink to={'/logout'} className="cursor-pointer hover:text-black">Logout</NavLink>
          </div>
        </div>
      </div>
      <Link to={'/cart'} className='relative'>
        <img src={shopping_bag} alt="shopping-bag" width={25} height={25} />
        <p className=' absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
      </Link>
      <img onClick={() => setVisible(true)} src={hamburger} alt="Menu" height={25} width={25} />
    </div>
    </button>

    <div className={`absolute -top-8 -right-1/3 bottom-0 overflow-hidden bg-white transition-all duration-300 ease-in-out ${visible ? 'w-full' : 'w-0'} z-50 max-h-screen rounded-l bg-gray-100`}>
    <div className='flex flex-col text-gray-600 h-full'>
    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
      
      <img src={down_icon} alt="back-icon" className='h-4 rotate-90' />
      <p>Back</p>
    </div>
    <NavLink onClick={() => setVisible(false)} to={'/'} className='py-2 pl-6 border-b '>
      Home
    </NavLink>

    <NavLink onClick={() => setVisible(false)} to={'/collection'} className='py-2 pl-6 border-b'>
      Collection
    </NavLink>

    <NavLink onClick={() => setVisible(false)} to={'/#about'} className='py-2 pl-6 border-b'>
      About Us
    </NavLink>

    <NavLink onClick={() => setVisible(false)} to={'#home'} className='py-2 pl-6 border-b'>
      Contact Us
    </NavLink>
    {/* Add more links here */}
  </div>
</div>
  </nav>
</header>
<SearchBar/>  
</div>


  )
}

export default Nav 