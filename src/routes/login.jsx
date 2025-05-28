import React, { useState } from "react";
import Nav from "../components/Nav";
import { NavLink, useNavigate } from "react-router-dom";
import { Footer } from "../sections";
import { backendUrl } from "../App";
import { useEffect } from "react";
import { toast } from "react-toastify";

function Login() {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [emailError , setemailError] = useState('');
    const [passwordError , setpasswordError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleSubmit =  async(e) => {
     e.preventDefault();
     setemailError('');
     setLoading(true);
        setpasswordError('');
        try {
            const res = await fetch(backendUrl+'/login' , {
                method: 'POST',
                body: JSON.stringify({ email , password }),
                headers: { 'Content-Type' : 'application/json' },
                credentials: 'include'
            });
            const data = await res.json();
            if(data.user){
                navigate('/');
            }
            if(data.errors) {
                setemailError(data.errors.email);
                setpasswordError(data.errors.password);
            }
        }
        catch(err){
        }
    };

    const isLoggedIn = async() => {
        try {
            const response = await fetch(backendUrl+ '/check' , {
                method: 'POST',
                credentials: 'include',
            })
            const data = await response.json()
            console.log(data)
            if( data === "Success"){
                navigate('/')
                toast.success('Already Logged In')
            }
        } catch (error) {
            
        }
    }

    useEffect(() => {
        isLoggedIn()
    }, [])

    return (
        <div>
            <Nav></Nav>
            <div className="flex flex-col min-h-screen justify-center items-center">
                <div className="inline-flex gap-2 items-center">
                    <h1 className="text-3xl justify-center flex font-serif">LogIn</h1>
                    <p className="w-6 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
                </div>

                <form className="font-montserrat w-1/4 mt-3" onSubmit={handleSubmit}>                   
                    <input className="border-1 border-black rounded-none mb-4" placeholder="Email" type="text" name="email" required onChange={(e) => {setEmail(e.target.value)}}></input>
                    <div className="text-red-600">{emailError}</div>
                    <input className="border-1 border-black rounded-none mb-1" placeholder="Password" type="password" name="password" required onChange={(e) => {setPassword(e.target.value)}}></input>
                    <div className="text-red-600">{passwordError}</div>
                    <div className="flex flex-row justify-between">
                        <NavLink to={''} className="mb-4 text-[13px] hover:underline">Forget your password?</NavLink>
                        <NavLink to={'/signup'} className="mb-4 text-[13px] hover:underline">Create Account?</NavLink>
                    </div>

                    <div className="flex justify-center">
                        <button
                    type="submit"
                    className="bg-black p-2 text-white rounded-lg w-full mt-2 hover:cursor-pointer disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? (
                        <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 00-8 8z"></path>
                            </svg>
                        </span>
                    ) : (
                        'Log In'
                    )}
                </button>
                    </div>
                    
                </form> 
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Login