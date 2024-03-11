import React from 'react'
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className='padding-x py-6 absolute z-10 w-full my-4 bg-slate-100 border-y-2 border-black'>
        <nav className='flex justify-between items-center max-container'>
            <a href='/'>
                <img src={headerLogo}  alt='Logo' width={130} height={29}/>
            </a>
            <ul className='flex-1 flex justify-center gap-16  max-md:hidden'>
                {navLinks.map((item) =>( 
                    <li key={item.label}>
                        <a href={item.href} className='font-medium pb-5 leading-normal text-slate-black hover:border-b-2 border-spacing-9 border-black'>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div>
                <img src={hamburger} alt='Hamburger' height={25} width={25} className='hidden max-md:block'/>
            </div>
        </nav>
    </header>
  )
}

export default Nav 