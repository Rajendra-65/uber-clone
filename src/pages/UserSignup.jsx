import React,{useState,useContext} from "react";
import { Link } from "react-router-dom";
import { useNavigate} from 'react-router-dom'
import axios from 'axios'
import  {UserDataContext} from '../context/UserContext';

const UserSignup = () => { 

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [firstname,setFirstName] = useState('')
    const [lastname,setLastName] = useState('')
    const [userData,setUserData] = useState({})
    
    const navigate = useNavigate()

    const {user,setUser} = React.useContext(UserDataContext)

    const submitHandler = async(e) =>{
        e.preventDefault()
        const newUser = {
                fullname:{
                    firstname:firstname,
                    lastname:lastname
                },
                email:email,
                password:password
        }
        const response = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/user/register`,newUser
        )

        if(response.status === 201){
            const data = response.data
            setUser(data.user)
            localStorage.setItem('token',data.token)
            navigate('/home')
        }
        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
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
                            value={firstname}
                            onChange={(e)=>{
                                setFirstName(e.target.value)
                            }}
                            placeholder="FirstName" 
                        />
                        <input
                            required
                            type='text'
                            className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-xl placeholder:text-base'
                            value={lastname}
                            onChange={(e)=>{
                                setLastName(e.target.value)
                            }}
                            placeholder="LastName" 
                        />
                    </div>

                    <h3
                        className='text-base mb-2'
                    >   
                        Enter Email
                    </h3>
                    <input 
                        required 
                        className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                        type="text" 
                        placeholder="Enter your email" 
                    />
                    
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
                        Create Account
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
                <p className="text-xs ">
                    By Proceeding , you consent to  get calls, Whatsapp or SMS
                    Message ,including by automated means,from user and its affiliates to the number provided
                </p>
            </div>
        </div>
    );
}

export default UserSignup;