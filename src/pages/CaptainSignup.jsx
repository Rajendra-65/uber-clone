import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () =>{

  const navigate = useNavigate()

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [firstname,setFirstName] = useState('')
  const [lastname,setLastName] = useState('')
  const [vehicleColor,setVehicleColor] = useState('')
  const [vehiclePlate,setVehiclePlate] = useState('')
  const [vehicleCapacity,setVehicleCapacity] = useState('')
  const [vehicleType,setVehicleType] = useState('')

  const {captain,setCaptain} = React.useContext(CaptainDataContext)

  const submitHandler = async(e) =>{
    e.preventDefault()
    const captainData = {
        fullname:{
            firstname:firstname,
            lastname:lastname
        },
        email:email,
        password:password,
        vehicle:{
            color:vehicleColor,
            plate:vehiclePlate,
            capacity:vehicleCapacity,
            type:vehicleType
        }
    }

    const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captain/register`,captainData
    )

    if(response.status === 201){
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token',data.token)
        navigate('/captain-home')
    }

    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')
  }


  return(
    <div className="p-7 h-screen flex flex-col justify-between">
            <img    
                className="w-16  ml-[-11px]"
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
                    <h3 className='text-base mb-2'>Vehicle Information</h3>
                    <div className='flex gap-4 mb-5'>
                        <input 
                            required 
                            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-xl placeholder:text-base'
                            type="text"
                            value={vehicleColor}
                            onChange={(e) => setVehicleColor(e.target.value)}
                            placeholder="Vehicle Color"
                        />
                        <input
                            required
                            type='text'
                            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-xl placeholder:text-base'
                            value={vehiclePlate}
                            onChange={(e) => setVehiclePlate(e.target.value)}
                            placeholder="License Plate"
                        />
                    </div>
                    <div className='flex gap-4 mb-5'>
                        <input 
                            required 
                            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-xl placeholder:text-base'
                            type="number"
                            value={vehicleCapacity}
                            onChange={(e) => setVehicleCapacity(e.target.value)}
                            placeholder="Passenger Capacity"
                        />
                        <select
                            required
                            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-xl'
                            value={vehicleType}
                            onChange={(e) => setVehicleType(e.target.value)}
                        >
                            <option value="" disabled>Vehicle Type</option>
                            <option value="car">car</option>
                            <option value="motorcycle">motorcycle</option>
                            <option value="auto">auto</option>
                        </select>
                    </div>
                    <button 
                        type="submit"
                        className='bg-[#111] text-white fond-semibold mb-3 rounded px-4 py-2  w-full text-base placeholder:text-base'
                    >
                        create captain account
                    </button>
                    
                </form>
                <p className ='text-center'>
                    Already have an account ?
                    <Link
                        to={'/captain/login'}
                        className="text-blue-600"
                    >
                        Login Here
                    </Link>
                </p>
            </div>
            <div>
                <p className="text-xs ">
                    This site is protected by reCAPTCHA and the <span className='underline'> Google PrivacyPolicy
                    </span> and <span>Terms of Service Apply</span>
                </p>
            </div>
        </div>
  )
}

export default CaptainSignup