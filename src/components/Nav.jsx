import React, { useState } from 'react'
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import { Link } from 'react-router-dom'

const Nav = () => {

    const [ user , setUser ] = useState('')
    const [ logInlink , setLogInlink ] = useState('')
    const [ signUp , setSignUp ] = useState('')
    const [ SignInlink , setSignInlink ] = useState('')
    const getUser = async() => {
        const res = await fetch('http://localhost:3000/' , {
            method: 'GET',
            credentials: 'include',
        })
        const data = await res.json();
        if(data === null){
            setUser(`LogIn`)
            setSignUp('SignUp')
            setLogInlink('/login')
            setSignInlink('/signup')
        }
        else if(data.user)
        {
            setUser(data.user.email);
            setSignUp('Logout')
            setSignInlink('/logout')
        }
    }
    getUser();
    

  return (
    <header className='padding-x py-6 absolute z-10 w-full my-4 bg-slate-100 border-y-2 border-black'>
        <nav className='flex items-center max-container gap-20'>
            <div>
                <Link to='/'>
                    <img src={headerLogo}  alt='Logo' width={130} height={29}/>
                </Link>
            </div>
            <div>
            <ul className='flex justify-center items-center gap-16  max-lg:hidden ml-32'>
                {navLinks.map((item) =>( 
                    <li key={item.label}>
                        <a href={item.href} className='font-medium leading-normal text-slate-black '>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            </div>
            <div>
                <ul className='flex gap-4 max-lg:hidden'>
                    <li className='font-medium leading-normal text-slate-black'><a href={logInlink}>{user}</a></li>
                    <p>/</p>
                    <li className='font-medium leading-normal text-slate-black'><a href={SignInlink}>{signUp}</a></li>
                </ul>
                </div>
            <div>
                    <img src={hamburger} alt='Hamburger' height={25} width={25} className='hidden max-lg:block'/>
            </div>
        </nav>
    </header>
  )
}

export default Nav 