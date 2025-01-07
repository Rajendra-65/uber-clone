import React,{useState,useRef} from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanelOpen from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmedRide'
import WaitForDriver from '../components/WaitForDriver'
import LookingForDriver from '../components/LookingForDriver'
import axios from "axios"

const Home = () => {
    const [pickup,setPickup] = useState('')
    const [destination,setDestination] = useState('')
    const [panelOpen,setPanelOpen] = useState(false)
    const vehiclePanelRef = useRef(null)
    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)
    const [vehiclePanelOpen,setVehiclePanelOpen] = useState(false)
    const [confirmRidePanel,setConfirmRidePanel] = useState(false)
    const [waitingForDriver,setWaitingForDriver] = useState(false)
    const [ pickupSuggestions, setPickupSuggestions ] = useState([])
    const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
    const [vehicleFOund,setVehicleFound] = useState(false)
    const vehicleFoundRef = useRef(null)
    const confirmRidePanelRef = useRef(null)
    const waitingForDriverRef = useRef(null)
    const [ activeField, setActiveField ] = useState(null)
    const [ fare, setFare ] = useState({})
    const [ vehicleType, setVehicleType ] = useState(null)
    const [ ride, setRide ] = useState(null)

    const handlePickupChange = async (e) => {
        setPickup(e.target.value)
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }

            })
            setPickupSuggestions(response.data)
        } catch {
            // handle error
        }
    }

    const handleDestinationChange = async (e) => {
        setDestination(e.target.value)
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setDestinationSuggestions(response.data)
        } catch {
            // handle error
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()

    }

    useGSAP(function(){
        if(panelOpen){
            gsap.to(panelRef.current,{
                height:'70%',
                opacity:1,
                padding:24
            })
            gsap.to(panelCloseRef.current,{
                opacity:1
            })
        }else{
            gsap.to(panelRef.current,{
                height:'0%',
                padding:0
            })
            gsap.to(panelCloseRef.current,{
                opacity:0
            })
        }   
    },[panelOpen])

    useGSAP(function(){
        if(vehiclePanelOpen){  
            gsap.to(vehiclePanelRef.current,{
                transform:'translateY(0)',
                duration:0.5,
                ease:'power1.out'
            })
        }else{
            gsap.to(vehiclePanelRef.current,{
                transform:'translateY(100%)',
                duration:0.5,
                ease:"power1.out"
            })
        }
    },[vehiclePanelOpen])

    useGSAP(function(){
        if(confirmRidePanel){  
            gsap.to(confirmRidePanelRef.current,{
                transform:'translateY(0)',
                duration:0.5,
                ease:'power1.out'
            })
        }else{
            gsap.to(confirmRidePanelRef.current,{
                transform:'translateY(100%)',
                duration:0.5,
                ease:"power1.out"
            })
        }
    },[confirmRidePanel])

    useGSAP(function(){
        if(vehicleFOund){  
            gsap.to(vehicleFoundRef.current,{
                transform:'translateY(0)',
                duration:0.5,
                ease:'power1.out'
            })
        }else{
            gsap.to(vehicleFoundRef.current,{
                transform:'translateY(100%)',
                duration:0.5,
                ease:"power1.out"
            })
        }
    },[vehicleFOund])

    useGSAP(function(){
        if(waitingForDriver){  
            gsap.to(waitingForDriverRef.current,{
                transform:'translateY(0)',
                duration:0.5,
                ease:'power1.out'
            })
        }else{
            gsap.to(waitingForDriverRef.current,{
                transform:'translateY(100%)',
                duration:0.5,
                ease:"power1.out"
            })
        }
    },[waitingForDriver])

    async function findTrip() {
        setVehiclePanelOpen(true)
        setPanelOpen(false)

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
            params: { pickup, destination },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        setFare(response.data)
    }

    async function createRide() {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
            pickup,
            destination,
            vehicleType
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })


    }

    return(

        <div
            className='h-screen relative'
        >
            <img 
                className='w-16 absolute left-5 top-5'
                src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s'        
            />
            <div
                className='h-screen w-screen'
            >
                <img
                    className='w-screen'
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRUqoICN37QQVovjChZ_y4tgtGjIhNSHNC7w&s"
                />
            </div>
            <div
                className='bg-white flex flex-col justify-end h-screen absolute top-0 w-full'
            >
                <div className='h-[30%] p-6 bg-white relative ' >
                    <h5
                        ref={panelCloseRef}
                        onClick={()=>{
                            setPanelOpen(false)
                        }}
                        className='absolute opacity-0 right-6 top-6 text-2xl'
                    >
                        <i 
                            className='ri-arrow-down-wide-line'
                        />
                    </h5>
                    <h4
                        className='text-2xl font-semibold'
                    >
                        Find a trip
                    </h4>
                    <form
                        onSubmit={(e)=>{
                            submitHandler(e)
                        }}
                    >
                    <div 
                        className='line absolute h-16 w-1 top-[30%] left-10 bg-gray-900 rounded-full'
                    />
                    <input 
                        type='text'
                        className='bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mt-3'
                        placeholder='add a pick-up loaction'
                        value = {pickup} 
                        onClick={()=>{
                            setPanelOpen(true)
                            setActiveField('pickup')
                        }}
                        onChange={handlePickupChange}
                    />
                    <input
                        type='text'
                        className='bg-[#eeeeee] px-12 py-2 text-base rounded-lg mt-3 w-full'
                        placeholder='Enter Your Destination'
                        value = {destination}
                        onClick={()=>{
                            setPanelOpen(true)
                            setActiveField('destination')
                        }}
                        onChange={handleDestinationChange}
                    />
                    </form>
                    <button
                        onClick={findTrip}
                        className='bg-black text-whtie px-4 py-2 rounded-sm w-full'
                    >
                       Find Trip 
                    </button>
                </div>
                <div 
                    ref={panelRef}
                    className='h-[70%] bg-white p-5 opacity-0'
                >
                    <LocationSearchPanel
                        suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
                        setPanelOpen={setPanelOpen}
                        setVehiclePanelOpen={setVehiclePanelOpen}
                        setPickup={setPickup}
                        setDestination={setDestination}
                        activeField={activeField}
                    />
                </div>
            </div>
            <div
                ref={vehiclePanelRef}
                className="fixed z-10 w-full bottom-0 translate-y-full bg-white px-3 py-10 pt-14"
            >
                <VehiclePanelOpen
                    selectVehicle = {setVehicleType}
                    fare = {fare}
                    setConfirmRidePanel={setConfirmRidePanel}
                    setVehiclePanelOpen={setVehiclePanelOpen}
                />
            </div>
            <div
                ref={confirmRidePanelRef}
                className="fixed z-10 w-full bottom-0 translate-y-full bg-white px-3 py-6 pt-14"
            >
                <ConfirmRide 
                    createRide = {createRide}
                    pickup={pickup}
                    destination = {destination}
                    fare={fare}
                    vehicleType = {vehicleType}
                    setConfirmRidePanel={setConfirmRidePanel} 
                    setVehicleFound = {setVehicleFound}
                />
            </div>
            <div
                ref={vehicleFoundRef}
                className="fixed z-10 w-full bottom-0 translate-y-full bg-white px-3 py-6 pt-14"
            >
                <LookingForDriver
                    setVehicleFound = {setVehicleFound}
                />
            </div>
            <div
                ref= {waitingForDriverRef}
                className="fixed z-10 w-full bottom-0 translate-y-full bg-white px-3 py-6 pt-14"
            >
                <WaitForDriver
                    waitingForDriver={waitingForDriver}
                    
                />
            </div>
        </div>
    )
}

export default Home