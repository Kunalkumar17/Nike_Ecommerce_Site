import React, { useState } from "react";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";

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
            const res = await fetch('http://localhost:3000/signup' , {
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
            <div className="flex flex-row min-h-screen justify-center items-center bg-hero">
                <form className="font-montserrat bg-white-400 mt-10 shadow-xl backdrop-blur-3xl" onSubmit={handleSubmit}>
                    <h1 className=" font-bold text-xl mb-4">Sign Up</h1>
                    <label htmlFor="fname">First Name:</label>
                    <input className="" type="text" name="fname" required onChange={(e) => {setfname(e.target.value)}}></input>
                    <label htmlFor="lname">Last Name:</label>
                    <input type="text" name="lname" required onChange={(e) => {setlname(e.target.value)}}></input>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" required onChange={(e) => {setEmail(e.target.value)}}></input>
                    <div className="text-red-600">{emailError}</div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" required onChange={(e) => {setPassword(e.target.value)}}></input>
                    <div className="text-red-600">{passwordError}</div>
                    <button type="submit" className="bg-coral-red p-4 text-white rounded-lg mt-4">Sign Up</button>
                </form>
        </div>
        </div>
    )
}

export default SignUp