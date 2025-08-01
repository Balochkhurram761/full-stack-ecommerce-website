import React from 'react'
import { counutrySuppliers } from '../../constants/SuppliersData'

const HeroSupplier = () => {
  return (
    <div className="back bg-[#F7FAFC]">
    <div className="hero flex gap-3 p-3 flex-col w-[90%] mx-auto ">
        <h1 className='font-semibold text-[24px]' >Supplier by Region</h1>
        <div className="cn grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4">
        {counutrySuppliers.map((item,index)=>{
            return( 
        <div className="country  flex items-center gap-3 ">
            <div className="logo">
                <img src={item.flag} alt="" />
            </div>
            <div className="detail">
                <h1 className='text-[#1C1C1C]  text-[16px]' >{item.title}</h1>
                <p className='text-[#8B96A5] text-[13px]'>{item.desc}</p>
            </div>
        </div>
           )
        })}
        </div>
        </div>
    </div>
  )
}

export default HeroSupplier