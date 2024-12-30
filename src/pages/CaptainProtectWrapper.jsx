import React,{useContext, useEffect, useState} from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainProtectorWrapper = ({
    children
}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const {captain,setCaptain} = useContext(CaptainDataContext)
    const [isLoading,setIsLoading] = useState(true)
    
    useEffect(()=>{
        if(!token){
            navigate('/captain/login')
        }
    },[ token,navigate ])

    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    .then((response) => {
        if (response.status === 200) {
            setCaptain(response.data.captain);
            setIsLoading(false);
        }
    })
    .catch((error) => {
        console.error('Error fetching captain profile:', error);
        localStorage.removeItem('token');
        navigate('/captain/login');
    });
    

    if(isLoading){
        return(
            <div>Loading....</div>
        )
    }


    
    return(
        <>
            {children}
        </>
    )
}

export default CaptainProtectorWrapper