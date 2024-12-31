import React from "react"

const ConfirmRide = (props) => {
    return(
        <div>
            <h5 className='p-1 text-center w-full absolute top-0'
                onClick={()=>{
                    props.setVehiclePanelOpen(false)
                }}
            >
                <i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i>
            </h5>
            <h3
                className='text-2xl font-semibold mb-5'
            >
                Confirm Your Ride
            </h3>
            <div
                className='flex gap-2 justify-between flex-col items-center'
            >
                <img 
                    className='h-20'
                    src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
                />
                <div
                    className='w-full mt-5 '
                >
                    <div
                        className='flex items-center gap-5 border border-b-4 p-3'
                    >
                        <i className='ri-map-pin-2-fill text-lg'>

                        </i>
                        <div
                        
                        >
                            <h3
                                className='text-lg font-medium'
                            >562/11-A</h3>
                            <p
                                className='text-sm -mt-1 text-gray-600'
                            >Kankariya Tablab, Bhopal</p>
                        </div>
                    </div>
                    <div
                        className='flex items-center gap-5 border border-b-4 p-3'
                    >
                        <i className='ri-map-pin-2-fill text-lg'>

                        </i>
                        <div
                        
                        >
                            <h3
                                className='text-lg font-medium'
                            >562/11-A</h3>
                            <p
                                className='text-sm -mt-1 text-gray-600'
                            >Kankariya Tablab, Bhopal</p>
                        </div>
                    </div>
                    <div
                        className='flex items-center gap-5 border p-3'
                    >
                        <i className='ri-currency-line'>

                        </i>
                        <div
                        
                        >
                            <h3
                                className='text-lg font-medium'
                            >₹193.00</h3>
                            <p
                                className='text-sm -mt-1 text-gray-600'
                            >Cash Cash</p>
                        </div>
                    </div>
                </div>
                <button 
                    onClick={()=>{
                        props.setVehicleFound(true)
                        props.setConfirmRidePanel(false)
                    }}
                    className='w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-5'>Confirm</button>
            </div>
            
        </div>
    )
}

export default ConfirmRide