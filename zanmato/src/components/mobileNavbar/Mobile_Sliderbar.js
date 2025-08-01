import React from 'react'
import { IoMdClose } from "react-icons/io";

const Mobile_Sliderbar = ({menu, onclose}) => {
  return (
  <div className={`mobilemenu fixed z-20 top-0 block lg:hidden w-[280px] sm:w-[280px] md:w-[340px] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.12),_0_1px_2px_rgba(0,0,0,0.24)] h-[100vh] transform transition-transform duration-500 ${menu ? 'translate-x-0 pointer-events-auto' : '-translate-x-[120%] pointer-events-none'}`}>
    <div onClick={onclose} className="close absolute right-[-40px] bg-black text-white outline-none border-none p-2 flex items-center rounded-md text-[30px] w-[40px] h-[40px]"><IoMdClose /></div>
      <div className="section1 flex flex-col gap-2 bg-[#EFF2F4] p-4">
        <div className="logo ">
          <img className='w-[50px] h-[50px]  ' src={require("../../assets/assets/socail/Avatar.png")} alt="" />

        </div>
        <div className="linsk text-[17px]">
         <span> <a href="">Sign in  </a>| <a href="">Register</a> </span>
        </div>
      </div>
      <div className="section2">
         <ul className='flex  flex-col gap-6 px-3 py-4'>
         <li><a href="/home" className="flex items-center space-x-2">
    <img className="w-[20px] h-[20px]" src={require("../../assets/assets/Layout/navbar/HVector.png")}alt="Home Icon"/><span>Home</span></a></li>
     <li><a href="/home" className="flex items-center space-x-2">
    <img className="w-[20px] h-[20px]" src={require("../../assets/assets/Layout/navbar/CVector.png")}alt="Home Icon"/><span>Categories</span></a></li>
     <li><a href="/home" className="flex items-center space-x-2">
    <img className="w-[20px] h-[20px]" src={require("../../assets/assets/Layout/navbar/vector3.png")}alt="Home Icon"/><span>Favorites</span></a></li>
     <li><a href="/home" className="flex items-center space-x-2">
    <img className="w-[20px] h-[20px]" src={require("../../assets/assets/Layout/navbar/MOVector.png")}alt="Home Icon"/><span>My Orders</span></a></li>
    
         </ul>
      </div>
      <hr className='h-[3px] bg-red-50' />
      <div className="section3">
     <ul className='flex  flex-col gap-6 px-3 py-4' >
      <li><a href="/home" className="flex items-center space-x-2">
    <img className="w-[20px] h-[20px]" src={require("../../assets/assets/Layout/navbar/InternetVector.png")}alt="Home Icon"/><span>English | USD</span></a></li>
    <li><a href="/home" className="flex items-center space-x-2">
    <img className="w-[20px] h-[20px]" src={require("../../assets/assets/Layout/navbar/Music.png")}alt="Home Icon"/><span>Contact Us</span></a></li>
    <li><a href="/home" className="flex items-center space-x-2">
    <img className="w-[20px] h-[20px]" src={require("../../assets/assets/Layout/navbar/Vectorbuild.png")}alt="Home Icon"/><span>About</span></a></li>
     </ul>
      </div>
        <hr className='h-[3px] bg-red-50' />
      <div className="section4">
       <ul className='flex  flex-col gap-5 px-3 py-4 items-center' >
         <li><a href="/home" className="flex items-center space-x-2">
    <span>User  Agreement </span></a></li>
             <li><a href="/home" className="flex items-center space-x-2">
    <span>Partnership </span></a></li>
         <li><a href="/home" className="flex items-center space-x-2">
    <span>Privacy policy</span></a></li>

    
       </ul>
      </div>
  </div>
  )
}

export default Mobile_Sliderbar