import React from "react";

const Feature = ({ handleGrid, Gird, totalproduct }) => {
  return (
    <div className="section">
      <div className=" hidden sm:hidden cursor-pointer md:block lg:block">
        <div className="subsection1  h-[60px] bg-white flex flex-row items-center justify-between px-6  ">
          <div className="items">
            <h1>
              {totalproduct} items in  {""}
              <span className="font-semibold text-[16px]">
                 mobile accesory{" "}
              </span>
            </h1>
          </div>
          <div className="verf flex items-center  gap-4">
            <input
              className="w-[20px] h-[20px] rounded-md"
              type="checkbox"
              name=""
              id=""
            />
            <h1>Verified only</h1>
            <div className="drop border-2 justify-between w-[150px] rounded-sm px-3 py-2 border-[#DEE2E7] flex  items-center gap-2  ">
              Featured
              <img
                src={require("../../assets/assets/Layout/Form/input-group/Icon/control/Vector.png")}
                alt=""
              />
            </div>
            <div className="gridstwo flex items-center w-[40px] ">
              <img
                className={`border-2  border-[#DEE2E7] rounded-md cursor-pointer   w-full h-full ${
                  Gird === 1 ? "bg-[#DEE2E7]" : "bg-white"
                }   `}
                onClick={() => handleGrid(1)}
                src={require("../../assets/assets/Layout/Misc/gridview.png")}
                alt=""
              />
              <img
                className={`border-2  border-[#DEE2E7] rounded-md   w-full h-full p-1 ${
                  Gird === 3 ? "bg-[#DEE2E7]" : "bg-white"
                }   `}
                onClick={() => handleGrid(3)}
                src={require("../../assets/assets/Layout/Misc/Vector.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="block sm:block md:hidden lg:hidden w-full">
        <div className="section2 mx-auto w-full px-4 grid grid-cols-5 items-center ">
          <div className="maindrop  col-span-2">
            <div className="drop border-2 flex items-center justify-between border-[#DEE2E7] p-2 w-full text-center font-medium text-[13px] rounded-md">
              <h1 className="text-center mx-auto"> Sort: Newest</h1>
              <img
                src={require("../../assets/assets/socail/sort.png")}
                alt=""
              />
            </div>
          </div>
          <div className="maindrop col-span-2">
            <div className="drop border-2 gap-6 flex w-full items-center  justify-between border-[#DEE2E7] text-center p-2 font-medium text-[13px] rounded-md">
              <h1 className="text-center mx-auto"> Filter (3)</h1>
              <img
                className=""
                src={require("../../assets/assets/socail/filter.png")}
                alt=""
              />
            </div>
          </div>
          <div className="gridstwo flex gap-1 justify-center">
            <img
              className={`border-2 border-[#DEE2E7] rounded-md cursor-pointer w-[30px] h-[30px] ${
                Gird === 1 ? "bg-[#DEE2E7]" : "bg-white"
              }`}
              onClick={() => handleGrid(1)}
              src={require("../../assets/assets/Layout/Misc/gridview.png")}
              alt=""
            />
            <img
              className={`border-2 border-[#DEE2E7] rounded-md w-[30px] h-[30px] p-1 cursor-pointer ${
                Gird === 3 ? "bg-[#DEE2E7]" : "bg-white"
              }`}
              onClick={() => handleGrid(3)}
              src={require("../../assets/assets/Layout/Misc/Vector.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
