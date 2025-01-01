import React from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopup = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-full absolute top-0"
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm This Ride to start</h3>
      <div className="flex items-center justify-between bg-yellow-400 rounded-md p-4">
        <div className="flex items-center gap-3 mt-4 ">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDu-k_hZT0lFOLgdNDAFXCMcRJjhp8vBZqsw&s"
            alt="driver-image"
          />
          <h2 className="text-xl font-medium">Harsh Patels</h2>
        </div>
        <h5 className="text-lg font-semibold mt-4">2.2 KM</h5>
      </div>
      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5 ">
          <div className="flex items-center gap-5 border border-b-4 p-3">
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Tablab, Bhopal
              </p>
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
        <Link 
          to='/captain-riding'
          className="w-full flex justify-center bg-green-600 text-white font-semibold p-2 rounded-lg mt-5"
        >
            Confirm
        </Link>
        <button
          onClick={() => {
            props.setConfirmRidePopupPanel(false)
            props.setRidePopupPanel(false)
          }}
          className="w-full bg-red-600 text-white font-semibold p-2 rounded-lg mt-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmRidePopup;
