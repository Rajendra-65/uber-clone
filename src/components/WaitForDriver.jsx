import React from 'react'

const WaitForDriver = (props) => {
    return(
        <>
            <div>
            <h5 className='p-1 text-center w-full absolute top-0'
                onClick={()=>{
                    props.waitingForDriver(false)
                }}
            >
                <i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i>
            </h5>
            <div
                className='flex items-center justify-between'
            >
                <img 
                    className='h-12'
                    src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
                />
                <div
                    className='text-right'
                >
                    <h2 className='tex-lg fond-medium'>Rajendra</h2>
                    <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 1234</h4>
                    <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                </div>
            </div>
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
            </div>
            
        </div>
        </>
    )
}

export default WaitForDriver