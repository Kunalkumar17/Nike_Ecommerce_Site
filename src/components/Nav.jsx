import React, { useState, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { down_icon, headerLogo, nikeLogo } from '../assets/images'
import { hamburger, search_icon, shopping_bag, user } from '../assets/icons'
import { navLinks } from '../constants'
import { ShopContext } from '../context/ShopContext'
import SearchBar from './SearchBar'

const Nav = () => {
  const [visible, setVisible] = useState(false)
  const { setShowSearch, getCartCount } = useContext(ShopContext)

  const renderUserDropdown = () => (
    <div className="group relative inline-block">
      <img className="w-5 cursor-pointer" src={user} alt="user-icon" width={22} height={22} />
      <div className="group-hover:block hidden absolute z-50 pt-6">
        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-lg">
          <NavLink to="/Profile" className="cursor-pointer hover:text-black">My Profile</NavLink>
          <NavLink to="/orders" className="cursor-pointer hover:text-black">Orders</NavLink>
          <NavLink to="/logout" className="cursor-pointer hover:text-black">Logout</NavLink>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      {/* Top links (Join/Sign In) */}
      <div className="flex justify-end mr-4 gap-2 font-semibold max-lg:hidden my-2">
        <NavLink to="/signup" className="text-sm hover:text-gray-400 cursor-pointer">Join Us</NavLink>
        <div className="w-px h-3 bg-gray-500 mt-1" />
        <NavLink to="/login" className="text-sm hover:text-gray-400 cursor-pointer">Sign In</NavLink>
      </div>

      {/* Header/Navbar */}
      <header className="py-3 bg-slate-100 w-full z-10">
        <nav className="max-w-7xl mx-auto w-full px-6 sm:px-12 flex items-center justify-between">

          {/* Logo */}
          <div className='sm:hidden'>
            <Link to="/">
              <img src={nikeLogo} alt="Logo" width={65} height={25} />
            </Link>
          </div>

          {/* Logo - Mobile */}
          <div className='max-sm:hidden ml-5'>
            <Link to="/">
              <img src={headerLogo} alt="Logo" width={130} height={29} />
            </Link>
          </div>

          {/* Main Navigation - Desktop */}
          <ul className="flex items-center gap-8 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.href} className="flex flex-col items-center hover:bg-slate-100 group">
                {item.href.startsWith('#') ? (
                  <a href={item.href} className="font-medium text-slate-black">{item.label}</a>
                ) : (
                  <Link to={item.href} className="font-medium text-slate-black">{item.label}</Link>
                )}
                <hr className="w-2/4 h-[1px] bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </li>
            ))}
          </ul>

          {/* Icons - Desktop */}
          <div className="flex items-center gap-4">
            <NavLink to="/collection" className="rounded-full hover:bg-gray-200 p-1 sm:p-2">
              <img
                src={search_icon}
                alt="search-icon"
                className="w-4 sm:w-5"
                onClick={() => setShowSearch(true)}
              />
            </NavLink>

            <div className="group relative inline-block">
              <img
                src={user}
                alt="user-icon"
                className="w-4 sm:w-5 cursor-pointer"
              />
              <div className="group-hover:block hidden absolute z-50 pt-6">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-lg">
                  <NavLink to="/Profile" className="cursor-pointer hover:text-black">My Profile</NavLink>
                  <NavLink to="/orders" className="cursor-pointer hover:text-black">Orders</NavLink>
                  <NavLink to="/logout" className="cursor-pointer hover:text-black">Logout</NavLink>
                </div>
              </div>
            </div>

            <Link to="/cart" className="relative">
              <img
                src={shopping_bag}
                alt="shopping-bag"
                className="w-5 sm:w-6"
              />
              <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                {getCartCount()}
              </p>
            </Link>

            <button className="lg:hidden block">
              <img
                src={hamburger}
                alt="Menu"
                className="w-5 sm:w-6"
                onClick={() => setVisible(true)}
              />
            </button>
          </div>
        </nav>

        {/* Slide-out Mobile Menu */}
        <div className={`absolute top-0 right-0 h-screen bg-gray-100 shadow-xl transition-all duration-300 ease-in-out z-50 ${visible ? 'w-3/4' : 'w-0 overflow-hidden'}`}>
          <div className="flex flex-col text-gray-600 h-full">
            <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
              <img src={down_icon} alt="back-icon" className="h-4 rotate-90" />
              <p>Back</p>
            </div>

            {['/', '/collection', '/#about', '#home'].map((link, i) => (
              <NavLink key={i} onClick={() => setVisible(false)} to={link} className="py-2 pl-6 border-b">
                {['Home', 'Collection', 'About Us', 'Contact Us'][i]}
              </NavLink>
            ))}
          </div>
        </div>
      </header>

      <SearchBar />
    </div>
  )
}

export default Nav
