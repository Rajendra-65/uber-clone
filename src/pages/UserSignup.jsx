import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserSignup = () => { 

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [userData,setUserData] = useState({})
    
    const submitHandler = (e) =>{
        e.preventDefault()
        setUserData({
            email:email,
            password:password
        })
        console.log(userData)
        console.log(email,password)
        setEmail('')
        setPassword('')
    }

    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <img    
                className="w-16 mb-10 ml-[-11px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5dirYuX5ACmcklZGEvxqoDGJoDuin0xEtA&s"
            />
            <div>
                <form
                    onSubmit={(e)=>{
                        submitHandler(e)
                    }}
                >
                    <h3 
                        className="text-lg font-medium mb-2"
                    >
                        What is Your Name
                    </h3>
                    <div
                        className = 'flex gap-4 mb-5'
                    >
                        <input  
                            required 
                            className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-xl placeholder:text-base'
                            type="text" 
                            placeholder="FirstName" 
                        />
                        <input
                            required
                            type='text'
                            className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-xl placeholder:text-base'
                            placeholder="LastName" 
                        />
                    </div>
                    
                    <h3
                        className='text-base mb-2'
                    >   
                        Enter Password
                    </h3>
                    <input 
                        required 
                        className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        type="password" 
                        placeholder="Password" 
                    />
                    <button 
                        type="submit"
                        className='bg-[#111] text-white fond-semibold mb-3 rounded px-4 py-2  w-full text-base placeholder:text-base'
                    >
                        Login
                    </button>
                    
                </form>
                <p className ='text-center'>
                    Already have an account ?
                    <Link
                        className="text-blue-600"
                    >
                        Login Here
                    </Link>
                </p>
            </div>
            <div>
                <Link
                    to='/login'
                    className='bg-green-500 flex items-center justify-center  text-white fond-semibold mb-3 rounded px-4 py-2 border w-full text-base'
                >
                    Sign in as User
                </Link>
            </div>
        </div>
    );
}

export default UserSignup;