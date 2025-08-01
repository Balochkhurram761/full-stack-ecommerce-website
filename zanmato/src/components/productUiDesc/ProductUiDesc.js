import React, { useCallback, useEffect, useState } from "react";
import { MdOutlineMessage, MdOutlineVerifiedUser } from "react-icons/md";
import { PiSailboatLight } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ListItem from "@mui/material/ListItem";
import { useDispatch, useSelector } from "react-redux";
import { saveForLater } from "../../redux/CartSlice";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosCheckmark } from "react-icons/io";

import Banner from "../cart/Banner";
import { LikeProduct } from "../../constants/Like";
const ProductUiDesc = () => {
  const [selectedImage, setSelectedImage] = useState("");

  const dispatch = useDispatch();

  const handlesaved = (item) => {
    dispatch(saveForLater(item));
  };
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/auth/getproducts/${id}`
      );
      setProduct(response.data.product);
      console.log(response.data);
    } catch (error) {
      console.log("Server Error", error);
    }
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/auth/getproducts/${id}`
        );
        const fetchedProduct = response.data.product;
        setProduct(fetchedProduct);

        // Set default selected image after data is fetched
        if (fetchedProduct?.images?.length > 0) {
          const defaultImage = `http://localhost:5000/${fetchedProduct.images[0]}`;
          setSelectedImage(defaultImage);
        }
      } catch (error) {
        console.log("Server Error", error);
      }
    };

    fetchData();
  }, [id]);

  if (!product) return <p>Loading product...</p>;

  return (
    <div className="productdesci bg-[#F8F9FA]">
      <div className="f mx-auto w-[90%] bg-white">
        <div className="links flex flex-row gap-2 py-3 text-[#777] items-center px-5">
          <Link to={"/"}>Home</Link>
          <IoIosArrowForward />
          <Link to={"/prodcut"}>Products</Link>
          <IoIosArrowForward />
          <Link to={""}>Men's wear</Link>
          <IoIosArrowForward />
          <Link to={""}>Summer Clothing</Link>
        </div>
        <div className="section  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 items-start justify-start p-4">
          {/* Left - Images */}
          <div className="flex flex-col gap-4 items-start">
            {/* 👉 Main Image */}
            {selectedImage ? (
              <img
                className="border border-[#DEE2E7] w-full h-auto max-w-[400px] rounded-md"
                src={selectedImage}
                alt="Main Product"
              />
            ) : (
              <div className="w-full h-[300px] flex justify-center items-center text-gray-500 border border-[#DEE2E7]">
                No Image Available
              </div>
            )}

            {/* 👉 Thumbnails */}
            <div className="boximage flex gap-3 flex-wrap">
              {product?.images?.map((img, index) => {
                const fullImg = `http://localhost:5000/${img}`;
                return (
                  <img
                    key={index}
                    onClick={() => setSelectedImage(fullImg)}
                    className={`w-[60px] h-[60px] object-cover cursor-pointer border rounded ${
                      selectedImage === fullImg
                        ? "border-green-500"
                        : "border-[#DEE2E7]"
                    }`}
                    src={fullImg}
                    alt={`Thumbnail ${index + 1}`}
                  />
                );
              })}
            </div>
          </div>

          {/* Middle - Product Details */}
          <div className="flex flex-col gap-3">
            <h1 className="text-[#00B517] font-semibold">
              Stock: {product.stock ? "In stock" : "Not in Stock"}
            </h1>
            <h1 className="font-semibold text-[20px]">{product.title}</h1>

            <div className="review text-[#787A80] text-[12px] md:text-[16px] flex flex-wrap gap-3 items-center">
              <img
                src={require("../../assets/assets/Layout/Misc/rating2.png")}
                alt="Rating"
              />
              <h1 className="hidden md:block">{product.rating}</h1>
              <span className="w-[6px] h-[6px] rounded-full bg-gray-700" />
              <h1 className="flex items-center gap-1">
                <MdOutlineMessage /> {product.review} reviews
              </h1>
              <span className="w-[6px] h-[6px] rounded-full bg-gray-700" />
              <h1 className="flex items-center gap-1">
                <PiSailboatLight /> {product.sold} sold
              </h1>
            </div>

            <div className="price flex gap-4 p-4 justify-between bg-[#FFF0DF] rounded">
              <div className="flex flex-col items-center">
                <h1 className="font-semibold text-[18px] text-[#FA3434]">
                  ${product.price}
                </h1>
                <span className="text-[13px] text-[#606060]">50-100 pcs</span>
              </div>
              <div className="hidden md:block border-l border-gray-300" />
              <div className="hidden md:block">
                <h1 className="font-semibold text-[18px] text-black">
                  ${product.minNegotiablePrice}
                </h1>
                <span className="text-[13px] text-[#606060]">100-700 pcs</span>
              </div>
              <div className="hidden md:block border-l border-gray-300" />
              <div className="hidden md:block">
                <h1 className="font-semibold text-[18px] text-black">
                  ${product.maxNegotiablePrice}
                </h1>
                <span className="text-[13px] text-[#606060]">700+ pcs</span>
              </div>
            </div>

            <div className="btn flex w-full gap-5 items-center justify-between">
              <button className="min-w-[90%] bg-[#0067FF] rounded-xl p-2 block md:hidden text-white">
                Send Inquiry
              </button>
              <p className="block md:hidden">
                <span className="text-[#0067FF] text-[20px] flex items-center justify-center border border-[#0067FF] w-[30px] h-[30px]">
                  <CiHeart />
                </span>
              </p>
            </div>

            <div className="info border flex flex-col gap-2 p-3 rounded">
              <div className="flex justify-between">
                <h1 className="text-[#8B96A5]">Price:</h1>
                <h1 className="text-[#505050] font-semibold">Negotiable</h1>
              </div>
              <hr className="my-2 border-t border-gray-300" />
              <div className="wrap flex flex-col gap-4">
                <div className="flex justify-between">
                  <h1 className="text-[#8B96A5]">Type:</h1>
                  <h1 className="text-[#505050] font-semibold">
                    {product.type}
                  </h1>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-[#8B96A5]">Material:</h1>
                  <h1 className="text-[#505050] font-semibold">
                    {product.material}
                  </h1>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-[#8B96A5]">Design:</h1>
                  <h1 className="text-[#505050] font-semibold">
                    {product.design}
                  </h1>
                </div>
              </div>
              <hr className="my-2 border-t border-gray-300" />
              <div className="wrap flex flex-col gap-4">
                <div className="flex justify-between gap-5">
                  <h1 className="text-[#8B96A5]">Customization:</h1>
                  <h1 className="text-[#505050] font-semibold w-[200px]">
                    {product.Customization}
                  </h1>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-[#8B96A5]">Protection:</h1>
                  <h1 className="text-[#505050] font-semibold">
                    {product.protection}
                  </h1>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-[#8B96A5]">Warranty:</h1>
                  <h1 className="text-[#505050] font-semibold">
                    {product.warranty}
                  </h1>
                </div>
                <a href="#" className="text-[#0D6EFD] block md:hidden">
                  See More
                </a>
              </div>
            </div>
          </div>
          {/* Right Sidebar */}
          <div className="section flex flex-col gap-3 col-span-1 md:col-span-2 lg:col-span-1">
            <div className="p-4 flex flex-col gap-3 border border-[#DEE2E7]">
              <div className="profile flex gap-2 items-center">
                <img
                  src={require("../../assets/assets/socail/img.jpg")}
                  alt="Seller"
                />
                <div>
                  <h1>
                    Supplier <br /> Guanjoi Trading LLC
                  </h1>
                </div>
              </div>
              <hr className="my-2 border-t border-gray-300" />
              <div className="text-[12px] md:text-[16px] flex flex-col gap-2">
                <h1 className="text-[#8B96A5] flex items-center gap-2">
                  <img
                    src={require("../../assets/assets/Layout1/Image/flags/DK@2x.png")}
                    alt="Country"
                  />
                  Germany
                </h1>
                <h1 className="text-[#8B96A5] flex items-center gap-2">
                  <MdOutlineVerifiedUser />
                  Verified Seller
                </h1>
                <h1 className="text-[#8B96A5] flex items-center gap-2">
                  <TbWorld />
                  Worldwide Shipping
                </h1>
              </div>
              <button className="bg-[#0067FF] p-2 text-white hidden md:block">
                Send Inquiry
              </button>
              <button className="p-2 border border-[#DEE2E7] text-[#0067FF] hidden md:block">
                Seller's Profile
              </button>
            </div>
            <div className="btn hidden md:block lg:block mx-auto ">
              <button
                className="border-none  flex gap-2  items-center justify-center     text-[#0D6EFD]"
                onClick={() => handlesaved(product)}
              >
                <CiHeart />
                Save for later
              </button>
            </div>
          </div>
        </div>
        <div className="e flex  gap-3">
          <div className="detail flex w-[75%] flex-col  gap-3 py-3 ">
            <div className="detail1">
              <div className="linsk flex gap-7 p-4 border-[1px] border-[#DEE2E7] text-[#8B96A5] font-medium">
                <h1 className="text-[#0D6EFD]">Description</h1>
                <h1>Reviews</h1>
                <h1>Shipping</h1>
                <h1>About seller</h1>
              </div>
            </div>

            <div className="info   text-[#505050] flex flex-col gap-3 px-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, Quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
              <table className="w-full border border-gray-300 text-sm">
                <tbody>
                  <tr className="">
                    <td className="p-2 border font-semibold bg-[#EFF2F4]">
                      Model
                    </td>
                    <td className="p-2 border">#8786867</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-semibold bg-[#EFF2F4]">
                      Style
                    </td>
                    <td className="p-2 border">Classic style</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-semibold bg-[#EFF2F4]">
                      Certificate
                    </td>
                    <td className="p-2 border">ISO 9001</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-semibold bg-[#EFF2F4]">
                      Size
                    </td>
                    <td className="p-2 border">34mm x 450mm x 19mm</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-semibold bg-[#EFF2F4] ">
                      Memory
                    </td>
                    <td className="p-2 border">36GB RAM</td>
                  </tr>
                </tbody>
              </table>
              <ul className="text-gray-600">
                <li className="flex gap-1 items-center">
                  {" "}
                  <IoIosCheckmark />
                  Some great feature name here
                </li>
                <li className="flex gap-1 items-center">
                  {" "}
                  <IoIosCheckmark />
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </li>
                <li className="flex gap-1 items-center">
                  <IoIosCheckmark />
                  Duis aute irure dolor in reprehenderit
                </li>
                <li className="flex gap-1 items-center">
                  <IoIosCheckmark />
                  Some great feature name here
                </li>
              </ul>
            </div>
          </div>
          <div className="like">
            <h2 className="text-xl font-semibold mb-4">You may like</h2>

            <div className="cards w-[80%]  flex flex-col gap-4">
              {LikeProduct.map((a, index) => {
                return (
                  <div
                    key={index}
                    className="card flex flex-row border p-3 rounded shadow"
                  >
                    <div className="img  overflow-hidden mb-2">
                      <img
                        src={a.image}
                        alt={a.title}
                        className="w-[40%] h-[40%] "
                      />
                    </div>
                    <div className="body">
                      <h1 className="text-md font-medium mb-1">{a.title}</h1>
                      <p className="text-sm text-gray-600">${a.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Banner />
      </div>
    </div>
  );
};

export default ProductUiDesc;
