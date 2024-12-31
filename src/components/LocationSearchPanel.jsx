import React from "react";
import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = (props) => {
    console.log(props)
  const locations = [
    "24B, Near kappor's Cafe, Sheryians Coding School, Bhopal",
    "22B, Near Malhotra's cafe, Sherians Coding School,Bhopal",
    "20B , Near singhai's Cafe, sherians Coding School, Bhopal",
    "18A , Near Raj's Cafe, sherians Coding School, Bhopal",
  ];
  return (
    <div>
      {locations.map(function (elem,index) {
        return (
          <>
            <div
                key={index}
                onClick={()=>{
                    props.setVehiclePanel(true)
                    props.setPanelOpen(false)
                }}
                className="flex gap-4 border-2 p-3 border-white active:border-black rounded-xl items-center my-2 justify-start"
            >
              <h2 className="bg-[#eee] flex items-center justify-center h-6 w-12 rounded-full">
                <i className="ri-map-pin-fill "></i>
              </h2>
              <h4 className="font-medium">
                {elem}
              </h4>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
