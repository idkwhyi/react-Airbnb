import React from "react";

export default function Navbar(){
  return (
    <div className="w-full flex justify-start ">
      <div className="p-5 drop-shadow-md w-screen bg-white border-transparent"> 
        <img src={require('./images/airbnb.png')} alt="airbnb" className="w-46 bg-cover"></img>
      </div>
    </div>
  )
}