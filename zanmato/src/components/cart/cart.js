import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import Herosection from "../deliverysupport/herosection";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import {
  addtocart,
  removetocart,
  emptycart,
  saveForLater,
} from "../../redux/CartSlice";
import SavedHeart from "../heart/Heart";
import Banner from "./Banner";

const Cart = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cartSlice);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAddToCart = (item) => {
    dispatch(addtocart(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removetocart(item));
  };
  const handlesaveforlater = (item) => {
    dispatch(saveForLater(item));
  };
  const handleEmptyCart = () => {
    dispatch(emptycart());
  };

  return (
    <div className="bg-[#F5F5F5]">
      <div className="cart w-full lg:w-[90%] mx-auto py-4 flex flex-col gap-3">
        <h1 className="text-[24px] px-3 font-semibold capitalize">
          My Cart ({carts.length})
        </h1>

        <div className="mainsection flex flex-col lg:flex-row justify-between gap-3">
          {/* Left Section */}
          <div className="w-full lg:w-[76%] bg-white rounded-xl py-3 px-5 flex flex-col gap-3">
            {carts.map((item) => (
              <div
                key={item._id}
                className="card flex flex-row gap-3 relative border-b pb-3"
              >
                <div className="img">
                  <img
                    className="border rounded-lg w-[100px] h-[100px] object-cover"
                    src={`http://localhost:5000/${item.images[0]}`}
                    alt={item.title}
                  />
                </div>

                <div className="main flex flex-col gap-2 w-full">
                  <div className="body flex flex-col gap-2">
                    <h1 className="font-medium text-[16px]">{item.title}</h1>

                    <div className="price absolute right-[20px] font-medium top-0">
                      ${item.price}
                    </div>

                    <div className="main text-[12px] text-[#8B96A5]">
                      <div className="size flex gap-2">
                        <p>Size: {item.size || "Medium"}</p>
                        <p>Color: {item.color || "Blue"}</p>
                        <p>Material: {item.material || "Plastic"}</p>
                      </div>
                      <div className="seller">
                        <p>Seller: Artel Market</p>
                      </div>
                    </div>

                    {/* Menu for mobile */}
                    <div className="absolute top-4 right-[-10px] block lg:hidden">
                      <IconButton onClick={handleMenuOpen}>
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                      >
                        <MenuItem onClick={() => handleRemoveFromCart(item)}>
                          Remove
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                          Save for Later
                        </MenuItem>
                      </Menu>
                    </div>

                    {/* Quantity control for desktop */}
                    <div className="hidden lg:block">
                      <div className="quantiy absolute right-[20px] top-[40px] w-[100px] py-1 px-3 border border-[#DEE2E7] flex rounded-lg items-center justify-between">
                        Qty: {item.qnty || 1}
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="btn flex gap-4">
                    <button
                      onClick={() => handleRemoveFromCart(item)}
                      className="border border-gray-300 p-1 px-3 text-[13px] rounded-lg text-red-500 hidden lg:block"
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => handlesaveforlater(item)}
                      className="border border-gray-300 p-1 px-3 text-[13px] rounded-lg text-[#0D6EFD] hidden lg:block"
                    >
                      Save for Later
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <hr className="w-full border-t border-[#E0E0E0] mt-4" />

            <div className="btn flex justify-between gap-4">
              <a
                href="/"
                className="border border-gray-300 p-2 px-3 font-medium flex items-center gap-2 text-[13px] rounded-lg bg-[#0067FF] text-white"
              >
                <IoArrowBack className="text-[18px]" /> Back to Shop
              </a>
              <button
                onClick={handleEmptyCart}
                className="border border-gray-300 p-2 px-3 font-medium text-[13px] rounded-lg text-[#0D6EFD]"
              >
                Remove All
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-[300px] flex flex-col gap-3">
            <div className="px-3 py-5 gap-4 capitalize border border-[#DEE2E7] bg-white text-gray-600">
              <h1>Have a coupon?</h1>
              <div className="inputs flex">
                <input
                  type="text"
                  className="border border-[#E0E0E0] px-2 p-2 rounded-l-lg outline-none"
                  placeholder="Add coupon"
                />
                <label className="border px-2 p-2 text-[#0D6EFD] rounded-r-lg border-[#E0E0E0]">
                  Apply
                </label>
              </div>
            </div>

            <div className="rounded-lg flex flex-col gap-3 p-3 bg-white text-[#505050]">
              <div>
                <h1 className="flex justify-between">
                  Items ({carts.length}):
                  <span>
                    $
                    {carts
                      .reduce(
                        (total, item) => total + item.price * item.qnty,
                        0
                      )
                      .toFixed(2)}
                  </span>
                </h1>
              </div>
              <h1 className="flex justify-between">
                Shipping: <span className="text-red-500">$10.00</span>
              </h1>
              <h1 className="flex justify-between">
                Tax: <span className="text-green-600">+$5.00</span>
              </h1>
              <hr className="my-4 h-[5px]" />
              <h1 className="font-semibold flex justify-between">
                Total:
                <span>
                  $
                  {(
                    carts.reduce(
                      (total, item) => total + item.price * item.qnty,
                      0
                    ) +
                    10 +
                    5
                  ).toFixed(2)}
                </span>
              </h1>
              <button className="bg-[#00B517] text-white p-4 rounded-lg">
                Checkout
              </button>
              <div className="pay flex flex-wrap items-center justify-center gap-3">
                <img
                  src={require("../../assets/assets/payment/payment.png")}
                  alt=""
                />
                <img
                  src={require("../../assets/assets/payment/payment1.png")}
                  alt=""
                />
                <img
                  src={require("../../assets/assets/payment/payment2.png")}
                  alt=""
                />
                <img
                  src={require("../../assets/assets/payment/paymeny4.png")}
                  alt=""
                />
                <img
                  src={require("../../assets/assets/payment/payment5.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <Herosection />
        <SavedHeart />
        <Banner />
      </div>
    </div>
  );
};

export default Cart;
