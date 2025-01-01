import React from "react";
import { Link } from "react-router-dom";
const CaptainRiding = () => {
  return (
    <div className="h-screen">
      <div className="fixed p-3 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABLUH3RR9WY4ogN9jIsbV0QTaQWXDvEWW1A&s"
          alt="uber-map-image"
        />
        <Link
          to="/captain-home"
          className=" h-10 w-10 bg-white flex items-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line ml-2.5"></i>
        </Link>
      </div>

      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://www.researchgate.net/publication/323759986/figure/fig3/AS:631576123682823@1527590890164/Map-in-Uber-application-tracking-user-in-a-Yellow-Cab.png"
        />
      </div>
      <div className="h-2/5 p-6">

      </div>
    </div>
  );
};

export default CaptainRiding;
