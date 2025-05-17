import React, { useState } from "react";
import Nav from "../components/Nav";
import { NavLink, useNavigate } from "react-router-dom";
import { Footer } from "../sections";
import { backendUrl } from "../App";

function SignUp() {
    const navigate = useNavigate();
    const [fname , setfname] = useState('');
    const [lname , setlname] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [emailError , setemailError] = useState('');
    const [passwordError , setpasswordError] = useState('');

    const handleSubmit =  async(e) => {
     e.preventDefault();
     setemailError('');
        setpasswordError('');
        try {
            const res = await fetch(backendUrl+'/signup' , {
                method: 'POST',
                body: JSON.stringify({fname , lname, email , password }),
                headers: { 'Content-Type' : 'application/json' },
                credentials: 'include',
            });
            const data = await res.json();

            console.log(data);
            
            if(data.user){
                navigate('/')
            }
            if(data.errors) {
                setemailError(data.errors.email);
                setpasswordError(data.errors.password);
            }
        }
        catch(err){
            console.log(err)
        }
    };

    return (
        <div>
            <Nav></Nav>
            <div className="flex flex-col min-h-screen justify-center items-center">
                <div className="inline-flex gap-2 items-center">
                    <h1 className="text-3xl justify-center flex font-serif">SignUp</h1>
                    <p className="w-6 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
                </div>

                <form className="font-montserrat mt-4" onSubmit={handleSubmit}>
                    <div className="flex gap-3">
                        <input className="border-1 border-black rounded-none mb-4" placeholder="First name" type="text" name="fname" required onChange={(e) => {setfname(e.target.value)}}></input>
                        <input className="border-1 border-black rounded-none mb-4" placeholder="Last name" type="text" name="lname" required onChange={(e) => {setlname(e.target.value)}}></input>
                    </div>                  
                    <input className="border-1 border-black rounded-none mb-4" placeholder="Email" type="text" name="email" required onChange={(e) => {setEmail(e.target.value)}}></input>
                    <div className="text-red-600">{emailError}</div>
                    <input className="border-1 border-black rounded-none mb-1" placeholder="Password" type="password" name="password" required onChange={(e) => {setPassword(e.target.value)}}></input>
                    <div className="text-red-600">{passwordError}</div>
                    <div className="flex flex-row justify-end">
                        <NavLink to={'/login'} className="mb-4 text-[13px] hover:underline">Log In?</NavLink>
                    </div>

                    <div className="flex justify-center">
                        <button type="submit" className="bg-black px-6 py-2 text-white rounded-none hover:bg-gray-600">Sign Up</button>
                    </div>
                    
                </form> 
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default SignUp