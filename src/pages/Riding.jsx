import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link
        to="/home"
        className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
      >
        <i className="text-lg ri-home-5-line font-medium"></i>
      </Link>

      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://www.researchgate.net/publication/323759986/figure/fig3/AS:631576123682823@1527590890164/Map-in-Uber-application-tracking-user-in-a-Yellow-Cab.png"
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="w-full mt-5 ">
          <div className="flex justify-between">
            <img
                className='h-20 mb-5'
                src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            />
            <div
                className='flex flex-col items-center justify-center'
            >
                <h3 className='text-lg'>Rajendra</h3>
                <h2 className='text-xl font-bold'>Mp04 AB 1234</h2>
                <h2 className='text-base test-base'>Maruti Suzuki Alto</h2>
            </div>
          </div>
          <div className="flex items-center gap-5 border border-b-4 p-3">
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Tablab, Bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 border p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.00</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
        <button className="w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-5">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
