import React from "react";

const FilterData = () => {
  return (
    <>
      <div className="section1 flex flex-col gap-3 ">
        <div className="category  flex flex-col gap-2">
          <div className="drop">
            <h1 className="flex flex-row items-center justify-between font-semibold text-[16px]">
              Category
              <img
                className=""
                src={require("../../assets/assets/Layout/Form/input-group/Icon/control/Vector.png")}
                alt=""
              />
            </h1>
          </div>
          <div className="dropdown flex flex-col gap-2 text-[#505050]">
            <p>Mobile accessory</p>
            <p>Electronics</p>
            <p>Smartphones</p>
            <p>Modern tech</p>
            <p className="text-[#0D6EFD]">See all</p>
          </div>
        </div>
        <hr />
        <div className="category  flex flex-col gap-2">
          <div className="drop">
            <h1 className="  flex flex-row items-center justify-between font-semibold text-[16px]">
              Brand
              <img
                className=""
                src={require("../../assets/assets/Layout/Form/input-group/Icon/control/Vector.png")}
                alt=""
              />
            </h1>
          </div>
          <div className="dropdown flex flex-col gap-2 text-[#505050]">
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Samsung</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>apple</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Huawei</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Pocco</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Lenovo</p>
            </div>
            <p className="text-[#0D6EFD]">See all</p>
          </div>
        </div>
        <hr />

        <div className="category  flex flex-col gap-2">
          <div className="drop">
            <h1 className="  flex flex-row items-center justify-between font-semibold text-[16px]">
              Features
              <img
                className=""
                src={require("../../assets/assets/Layout/Form/input-group/Icon/control/Vector.png")}
                alt=""
              />
            </h1>
          </div>
          <div className="dropdown flex flex-col gap-2 text-[#505050]">
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Metallic</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>plastic cover</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>8GB RAM</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Super Power</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Large Memory</p>
            </div>
            <p className="text-[#0D6EFD]">See all</p>
          </div>
        </div>
        <div className="category  flex flex-col gap-2">
          <div className="drop">
            <h1 className="  flex flex-row items-center justify-between font-semibold text-[16px]">
              Brand
              <img
                className=""
                src={require("../../assets/assets/Layout/Form/input-group/Icon/control/Vector.png")}
                alt=""
              />
            </h1>
          </div>
          <div className="dropdown flex flex-col gap-2 text-[#505050]">
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Samsung</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>apple</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Huawei</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Pocco</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Lenovo</p>
            </div>
            <p className="text-[#0D6EFD]">See all</p>
          </div>
        </div>
        <hr />
        <div className="category  flex flex-col gap-2">
          <div className="drop">
            <h1 className="  flex flex-row items-center justify-between font-semibold text-[16px]">
              Condition
              <img
                className=""
                src={require("../../assets/assets/Layout/Form/input-group/Icon/control/Vector.png")}
                alt=""
              />
            </h1>
          </div>
          <div className="dropdown flex flex-col gap-2 text-[#505050]">
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Any</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Refurbished</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Brand new</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Old items</p>
            </div>

            <p className="text-[#0D6EFD]">See all</p>
          </div>
        </div>
        <hr />
        <div className="category  flex flex-col gap-2">
          <div className="drop">
            <h1 className="  flex flex-row items-center justify-between font-semibold text-[16px]">
              Ratings
              <img
                className=""
                src={require("../../assets/assets/Layout/Form/input-group/Icon/control/Vector.png")}
                alt=""
              />
            </h1>
          </div>
          <div className="dropdown flex flex-col gap-2 text-[#505050]">
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Any</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Refurbished</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Brand new</p>
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <p>Old items</p>
            </div>

            <p className="text-[#0D6EFD]">See all</p>
          </div>
        </div>
        <hr />
        <div className="category  flex flex-col gap-2">
          <div className="drop">
            <h1 className="  flex flex-row items-center justify-between font-semibold text-[16px]">
              Ratings
              <img
                className=""
                src={require("../../assets/assets/Layout/Form/input-group/Icon/control/Vector.png")}
                alt=""
              />
            </h1>
          </div>
          <div className="dropdown flex flex-col gap-2 text-[#505050]">
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <img
                src={require("../../assets/assets/Layout/Misc/rating4.png")}
                alt=""
              />
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <img
                src={require("../../assets/assets/Layout/Misc/4rating.png")}
                alt=""
              />
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <img
                src={require("../../assets/assets/Layout/Misc/rating3.png")}
                alt=""
              />
            </div>
            <div className="input flex flex-row gap-2">
              <input
                className="w-[20px] h-[20px]  rounded-md"
                type="checkbox"
                name=""
                id=""
              />{" "}
              <img
                src={require("../../assets/assets/Layout/Misc/rating2.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterData;
