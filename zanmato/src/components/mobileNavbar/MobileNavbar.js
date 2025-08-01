import React, { useEffect, useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import Mobile_Sliderbar from './Mobile_Sliderbar';

const MobileNavbar = () => {
  const [mobilemenu,setmobilemenu]=useState(false);
  const handlemenu=()=>{
    setmobilemenu(!mobilemenu)
   
    
  }
    const handleClose = () => {
      setmobilemenu(false);
  };
  useEffect(()=>{
     if(mobilemenu){
      document.body.style.overflow='hidden';
     }
     else{
      document.body.style.overflow='auto'
     }
     return()=>{
      document.body.style.overflow='auto'
     }

  },[mobilemenu])
  return (
    <>
    {mobilemenu && (
  <div
    className="fixed inset-0 bg-[#636363] bg-opacity-60 z-10"
    onClick={handleClose}
  />
)}
    <div className="back bg-white py-3 sticky top-0 left-0 z-20   block lg:hidden my-2">
    <div className="mobile mx-auto w-[90%] flex justify-between items-center  ">
        <div className="mainsection flex items-center gap-10">
            <div className="menu text-[24px] " onClick={handlemenu}>
             <    IoMdMenu /> 

            </div>
            <div className="logo">
                <img className='h-[40px]' src={require("../../assets/assets/Layout/Brand/logo-colored.png")} alt="" />
            </div>
        </div>
        <div className="social flex gap-2 items-center">
            <img className='w-[20px] h-[20px]' src={require("../../assets/assets/Layout/navbar/MVector.png")} alt="" />
            <img className='w-[20px] h-[20px]' src={require("../../assets/assets/Layout/navbar/MVector1.png")} alt="" />
        </div>
    </div>
    </div>
     
     <Mobile_Sliderbar menu={mobilemenu} onclose={handleClose}/>
    
    </>
    
  )
}

export default MobileNavbar