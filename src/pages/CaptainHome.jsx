import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import ConfirmRidePopup from "../components/ConfirmRidePopup";

const CaptainHome = () => {
    const [ridePopupPanel,setRidePopupPanel] = useState(true)
    const [confirmRidePopupPanel,setConfirmRidePopupPanel] = useState(false)
    const ridePopupPanelRef = useRef(null)
    const confirmRidePopupPanelRef= useRef(null)

    useGSAP(function(){
        if(ridePopupPanel){
            gsap.to(ridePopupPanelRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(ridePopupPanelRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[ridePopupPanel])

    useGSAP(function(){
        if(confirmRidePopupPanel){
          console.log('hello')
            gsap.to(confirmRidePopupPanelRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(confirmRidePopupPanelRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[confirmRidePopupPanel])

    

  return (
    <div className="h-screen">
      <div className='fixed p-3 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABLUH3RR9WY4ogN9jIsbV0QTaQWXDvEWW1A&s" alt="uber-map-image"/>
        <Link to='/home' className=' h-10 w-10 bg-white flex items-center rounded-full'>
            <i className='text-lg font-medium ri-logout-box-r-line ml-2.5'></i>
        </Link>
      </div>

      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://www.researchgate.net/publication/323759986/figure/fig3/AS:631576123682823@1527590890164/Map-in-Uber-application-tracking-user-in-a-Yellow-Cab.png"
        />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails/>
      </div>
      <div ref={ridePopupPanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
        <RidePopUp
            setConfirmRidePopupPanel ={setConfirmRidePopupPanel}
            setRidePopupPanel ={setRidePopupPanel}
        />
      </div>
      <div 
        ref={confirmRidePopupPanelRef} 
        className='fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'
      >
        <ConfirmRidePopup
            setConfirmRidePopupPanel ={setConfirmRidePopupPanel}
            setRidePopupPanel={setRidePopupPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
