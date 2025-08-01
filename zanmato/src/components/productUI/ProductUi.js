import { CiHeart } from "react-icons/ci";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import FilterData from "../filterData/FilterData";
import Feature from "../feature/Feature";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../../redux/CartSlice";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const ProductUi = () => {
  const [productList, setProductList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalProduct, setTotalProduct] = useState("");
  const [grid, setGrid] = useState(1);

  const { carts } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();

  const getProduct = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/auth/getproducts?page=${page}&limit=${limit}`
      );
      setProductList(response.data.ProductUser);
      setTotalProduct(response.data.totalProducts);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.log("Server Error");
    }
  }, [page, limit]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  const handleGrid = (val) => {
    setGrid(val);
    if (val === 1) {
      setLimit(6);
    } else if (val === 3) {
      setLimit(12);
    }
  };

  const handleAdd = (item) => {
    dispatch(addtocart(item));
  };

  return (
    <div className="back bg-[#F7FAFC]">
      {/* Breadcrumbs */}
      <div className="links flex flex-row gap-2 px-3 py-3 text-[#777] items-center mx-auto w-[90%]">
        <Link to={"/"}>Home</Link>
        <IoIosArrowForward />
        <Link to={""}>Clothing</Link>
        <IoIosArrowForward />
        <Link to={""}>Men's wear</Link>
        <IoIosArrowForward />
        <Link to={""}>Summer Clothing</Link>
      </div>

      {/* Main Section */}
      <div className="mainsection flex flex-row gap-3 md:w-[97%] lg:w-[90%] mx-auto py-6">
        <div className="hidden lg:block w-[20%]">
          <FilterData />
        </div>

        <div className="flex flex-col gap-6 w-full">
          <Feature handleGrid={handleGrid} Gird={grid} totalproduct={totalProduct} />

          {/* Product Cards */}
          <div className="w-full">
            <div
              className={`cards grid gap-4 px-5 ${
                grid === 1
                  ? "grid-cols-1"
                  : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {productList.map((item) => (
                <Link key={item._id} to={`/product/${item._id}`}>
                  <div
                    className={`card flex border-white rounded-md w-full h-full p-4 gap-2 bg-white border-2 ${
                      grid === 3
                        ? "flex-col"
                        : "flex-col sm:flex-row md:flex-row lg:flex-row"
                    }`}
                  >
                    <div className="lgo flex items-center justify-center mx-auto">
                      <img
                        className="w-full min-h-[200px] object-cover"
                        src={`http://localhost:5000/${item.images[0]}`}
                        alt={item.title}
                      />
                    </div>

                    <div className="flex flex-col gap-4 py-5 relative w-[80%]">
                      <div className="absolute right-0 text-[#0D6EFD] text-[20px] border-2 w-[30px] h-[30px] flex items-center justify-center border-[#DEE2E7] hidden md:hidden">
                        <CiHeart />
                      </div>

                      <h1 className={`max-w-[300px] font-medium ${grid === 3 ? "hidden" : "block"}`}>
                        {item.title}
                      </h1>

                      <div className="flex flex-col gap-2">
                        <div className="price flex flex-row gap-4 items-center">
                          <h1 className="text-[20px] font-semibold">${item.price}</h1>
                          <span className="text-[#8B96A5] text-[16px] line-through">${item.oldprice}</span>
                        </div>

                        <div className="star flex flex-row items-center gap-2 flex-wrap">
                          <img
                            className="w-[80px] h-[15px]"
                            src={require("../../assets/assets/Layout/Misc/4rating.png")}
                            alt="rating"
                          />
                          <p className="text-[#FF9017]">7.5</p>
                          <p className={`bg-[#DEE2E7] w-[6px] h-[6px] rounded-full ${grid === 3 ? "hidden" : "block"}`} />
                          <p className={`text-[#8B96A5] ${grid === 3 ? "hidden" : "block"}`}>154 Orders</p>
                          <p className={`bg-[#DEE2E7] w-[6px] h-[6px] rounded-full ${grid === 3 ? "hidden" : "block"}`} />
                          <p className={`text-[#00B517] ${grid === 3 ? "hidden" : "block"}`}>Free Shipping</p>
                        </div>

                        {/* Description & Button */}
                        <div className={`${grid === 3 ? "hidden" : "hidden md:hidden lg:block"}`}>
                          <p className="max-w-[600px] text-[#505050]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                          </p>
                          <button
                            onClick={(e) => {
                              e.preventDefault(); // stop Link when clicking button
                              handleAdd(item);
                            }}
                            className="text-white p-2 rounded-lg w-[150px] bg-[#0D6EFD] font-medium mt-2"
                          >
                            Add to Cart
                          </button>
                        </div>

                        <h1 className={`font-medium max-w-[500px] text-[#606060] ${grid === 1 ? "hidden" : "block"}`}>
                          {item.title}
                        </h1>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="naivation flex flex-col sm:flex-row items-end justify-end gap-3">
            <div className="show flex flex-row border-[#DEE2E7] w-[120px] items-center justify-between px-3 py-2 rounded-md bg-white">
              <h1 className="text-black">show {limit}</h1>
              <img
                src={require("../../assets/assets/Layout/Form/input-group/Icon/control/Vector.png")}
                alt="control"
              />
            </div>

            <Stack direction="row" spacing={0}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={(event, value) => setPage(value)}
                color="success"
                variant="outlined"
                size="medium"
                shape="rounded"
              />
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductUi;
