import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainLogin = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const{captain,setCaptain} = React.useContext(CaptainDataContext)
    const navigate = useNavigate()
    
    const submitHandler = async (e) =>{
        e.preventDefault()
        const captain = {
            email:email,
            password
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/log-in`,captain)
        if(response.status === 200){
            const data = response.data
            console.log(data)
            setCaptain(data.captain)
            localStorage.setItem('token',data.token)
            navigate('/captain-home')
        }
        setEmail('')
        setPassword('')
    }
    
    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <img    
                className="w-16 mb-10 ml-[-11px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s"
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
                        What is Your email
                    </h3>
                    <input  
                        required 
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        type="email" 
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                        placeholder="Email" 
                    />
                    <h3
                        className='text-xl mb-2'
                    >   
                        Enter Password
                    </h3>
                    <input 
                        required 
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        type="password" 
                        placeholder="Password" 
                    />
                    <button 
                        type="submit"
                        className='bg-[#111] text-white fond-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'
                    >
                        Login
                    </button>
                    
                </form>
                <p className ='text-center'>
                    Join a fleet ?
                    <Link
                        to={'/captain/signup'}
                        className="text-blue-600"
                    >
                        Register as an captain
                    </Link>
                </p>
            </div>
            <div>
                <Link
                    to={'/login'}
                    className='bg-green-500 flex items-center justify-center  text-white fond-semibold mb-3 rounded px-4 py-2 border w-full text-lg'
                >
                    Sign in as User
                </Link>
            </div>
        </div>
    );
}

export default CaptainLogin;