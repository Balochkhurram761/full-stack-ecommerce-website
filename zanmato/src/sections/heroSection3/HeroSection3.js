import React from "react";

const HeroSection3 = () => {
  return (
    <div className="bg bg-[#F7FAFC] ">
      <div className="herosection3 grid gap-3  grid-cols-1 lg:grid-cols-5  mx-0 lg:mx-auto   p-0 lg:p-5  w-[100%] lg:w-[90%] bg-white border-white rounded-md">
        <div className="section1 hidden  md:hidden lg:block">
          <ul className="flex flex-col gap-2   text-[#505050] capitalize ">
            <li className="  hover:bg-[#E5F1FF] p-2">
              <a href="" className="block w-full w-full">
                <span>Automobiles</span>
              </a>
            </li>
            <li className="p-2 hover:bg-[#E5F1FF]">
              <a href="" className="block w-full w-full">
                <span>Clothes and wear</span>
              </a>
            </li>
            <li className="p-2 hover:bg-[#E5F1FF]">
              <a href="" className="block w-full w-full">
                <span>Home interiors</span>
              </a>
            </li>
            <li className="p-2 hover:bg-[#E5F1FF]">
              <a href="" className="block w-full w-full">
                <span>computer and tech</span>
              </a>
            </li>
            <li className="p-2 hover:bg-[#E5F1FF]">
              <a href="" className="block w-full w-full">
                <span>tools , equipment</span>
              </a>
            </li>
            <li className="p-2 hover:bg-[#E5F1FF]">
              <a href="" className="block w-full w-full">
                {" "}
                <span>Sports and outdoor</span>
              </a>
            </li>
            <li className="p-2 hover:bg-[#E5F1FF]">
              <a href="" className="block w-full w-full">
                <span>Animal and pets</span>
              </a>
            </li>
            <li className="p-2 hover:bg-[#E5F1FF]">
              <a href="" className="block w-full w-full">
                <span>Machinery tools</span>
              </a>
            </li>
            <li className="p-2 hover:bg-[#E5F1FF]">
              <a href="" className="block w-full w-full">
                <span>More category</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="section2  lg:col-span-3   relative">
          <div className="logo w-full h-full">
            <img
              className="w-full h-full object-cover"
              src={require("../../assets/assets/Image/backgrounds/Banner-board-800x420 2.png")}
              alt=""
            />
          </div>
          <div className="body absolute  flex flex-col gap-4 items-start top-0 left-2 transform translate-x-7 translate-y-4 md:translate-y-12 lg:translate-y-12">
            <h1 className=" text-[25px] sm:text-[30px] md:text-[30px] lg:text-[28px] leading-9">
              Lastest treding <br />{" "}
              <span className="text-[32px] sm:text-[40px] md:text-[40px] lg:text-[32px] font-bold">
                Electronic items
              </span>
            </h1>
            <button className="bg-white p-3 rounded-md w-[130px]">
              Learn more
            </button>
          </div>
        </div>
        <div className="k hidden lg:block ">
          <div className="section3 flex flex-col gap-3   ">
            <div className="subsection1 rounded-md flex flex-col gap-5 items-center bg-[#E3F0FF] p-5 ">
              <div className="user flex gap-3  ">
                <img
                  className=""
                  src={require("../../assets/assets/socail/Avatar.png")}
                  alt=""
                />
                <h1>
                  Hi,user <br /> let's get started
                </h1>
              </div>
              <div className="btn flex flex-row lg:flex-col gap-3 w-[100%] justify-center lg:items-center">
                <button className="bg-[#127FFF] text-white px-6 py-2  w-[40%] lg:w-[90%] rounded-md ">
                  join Now
                </button>
                <button className="bg-white text-[#0D6EFD] px-6 py-2 w-[40%] lg:w-[90%] rounded-md">
                  log in
                </button>
              </div>
            </div>
            <div className="subsection2 bg-[#F38332] p-5 rounded-md text-white text-[16px]">
              <h1>
                Get Us $10 off <br /> with a new <br /> supplier
              </h1>
            </div>
            <div className="subsection3 bg-[#55BDC3] p-5 rounded-md text-white text-[16px]">
              <h1>
                Send quotoes with <br /> supplier <br /> preferences
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection3;
