import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
        <div 
            className="bg-no-repeat bg-cover bg-center bg-[url(https://plus.unsplash.com/premium_photo-1669366206339-f94346ea35c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhZmZpYyUyMGxpZ2h0c3xlbnwwfHwwfHx8MA%3D%3D)] h-screen   flex justify-between flex-col w-full bg-red-400"
        >
            <img 
                className="w-16 h-20 m-5 ml-8 "
                src = "https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
                alt = "Uber Logo"
            />
            <div className="bg-white py-4 px-4 pb-7">
                <h2 className ='text-2xl font-bold'>Get Started with Uber</h2>
                <Link to='/login' className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4">Continue</Link>
            </div>
        </div>
    </div>
  );
}

export default Home;