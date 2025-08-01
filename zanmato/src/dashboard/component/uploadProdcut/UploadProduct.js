import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import GetProduct from "../table/GetProduct";

const UploadProduct = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [productSet, setProductSet] = useState({
    sku: "",
    category: "",
    title: "",
    desc: "",
    oldprice: "",
    minNegotiablePrice: "",
    maxNegotiablePrice: "",
    type: "",
    material: "",
    design: "",
    customization: "",
    protection: "",
    warranty: "",
    stock: "",
    images: [],
    size: [],
    color: "",
    seller: "",
    recommended: "",
    price: "",
    rating: "",
    sold: "",
    review: "",
    off: "",
  });

  const handleform = (e) => {
    const { name, value, files } = e.target;

    if (name === "images") {
      const imageFiles = Array.from(files);
      setProductSet({ ...productSet, [name]: imageFiles });
    } else if (name === "size") {
      const sizeArray = value.split(",").map((s) => s.trim());
      setProductSet({
        ...productSet,
        size: sizeArray,
      });
    } else {
      setProductSet({
        ...productSet,
        [name]: value,
      });
    }
  };

  const SubmitForm = async (e) => {
    const token = localStorage.getItem("token");

    console.log("Token being sent:", token);

    e.preventDefault();
    try {
      const formData = new FormData();
      for (const key in productSet) {
        const value = productSet[key];

        if (key === "images") {
          value.forEach((img) => formData.append("images", img));
        } else if (key === "size") {
          value.forEach((size) => formData.append("size", size));
        } else {
          formData.append(key, value);
        }
      }

      const response = await axios.post(
        "http://localhost:5000/api/auth/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(response.data.message || "Product uploaded successfully");
      setProductSet(response.data.product);
    } catch (error) {
      setMessage(error?.response?.data.message || "Server Error");
    }
  };

  return (
    <div className="uploadProduct  bg-[#F8F7FC]  ">
      <div className="section1 flex    p-4 items-center justify-between  ">
        <h1 className="text-[16px] font-semibold capitalize">total items</h1>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search product"
          className="p-2 px-4 w-[350px] rounded-full hidden md:block lg:block "
        />

        <Button
          variant="outlined"
          className="bg-[#C3DFFA] text-white font-bold p-3 rounded-lg border-none outline-none  capitalize "
          onClick={handleOpen}
        >
          Add Product
        </Button>
        <Dialog
          onClose={handleClose}
          open={open}
          PaperProps={{
            style: {
              width: "100%",
              maxWidth: "700px", // Set desired width
              margin: "auto",
              borderRadius: "12px",
            },
          }}
        >
          <div className="upload p-4 flex flex-col gap-5  mx-3 overflow-x-hidden relative">
            <div
              className="close bg-black text-white text-[24px] border-[1px] outline-none cursor-pointer flex items-center justify-center p-2 w-[40px] h-[40px] rounded-lg absolute right-0 "
              onClick={handleClose}
            >
              <IoMdClose />
            </div>
            <h1 className="text-[20px] font-semibold mx-auto">
              {" "}
              Upload Product
            </h1>
            {message && (
              <p className="text-green-600 font-medium text-center mt-3">
                {message}
              </p>
            )}
            <div className="form ">
              <form
                action=""
                onSubmit={SubmitForm}
                className=" flex flex-col gap-4"
              >
                <div className="maininput  flex  flex-col md:flex-row lg:flex-row gap-4">
                  <div className="inputs w-full flex flex-col gap-2 text-[18px] font-medium">
                    <label htmlFor="">Sku</label>
                    <input
                      placeholder="Enter Sku Number unique"
                      type="text"
                      value={productSet.sku}
                      name="sku"
                      id=""
                      onChange={handleform}
                      className="border-[1px] outline-none p-3 text-[11px] rounded-lg  "
                    />
                  </div>
                  <div className="inputs w-full flex flex-col gap-2 text-[18px] font-medium">
                    <label htmlFor="">Category</label>
                    <select
                      name="category"
                      value={productSet.category}
                      onChange={handleform}
                      choose
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">-- Choose --</option>
                      <option value="Automobiles">Automobiles</option>
                      <option value="Clothes and wear">Clothes and wear</option>
                      <option value="Home interiors">Home interiors</option>
                      <option value="computer and teach">
                        computer and teach
                      </option>
                      <option value="tools , equipments">
                        tools , equipments
                      </option>
                      <option value="sports and outdoor">
                        sports and outdoor
                      </option>
                      <option value="Animal and pets">Animal and pets</option>
                      <option value="Machinary tools">Machinary tools</option>
                      <option value="More Category">More Category</option>
                    </select>
                  </div>
                </div>
                <div className="maininput flex-col md:flex-row lg:flex  flex gap-4">
                  <div className="inputs w-full flex flex-col gap-2 text-[18px] font-medium">
                    <label htmlFor="">Title</label>
                    <input
                      placeholder="Enter Title"
                      type="text"
                      value={productSet.title}
                      name="title"
                      onChange={handleform}
                      id=""
                      className="border-[1px] outline-none p-3 text-[11px] rounded-lg  "
                    />
                  </div>
                  <div className="inputs w-full flex flex-col gap-2 text-[18px] font-medium">
                    <label htmlFor="">Description</label>
                    <input
                      placeholder="Enter Description"
                      type="text"
                      value={productSet.desc}
                      name="desc"
                      onChange={handleform}
                      id=""
                      className="border-[1px] outline-none p-3 text-[11px] rounded-lg  "
                    />
                  </div>
                </div>
                <div className="maininput flex-col md:flex-row lg:flex  flex gap-4">
                  <div className="inputs w-full flex flex-col gap-2 text-[18px] font-medium">
                    <label htmlFor=""> OFF perecentage</label>
                    <input
                      type="number"
                      value={productSet.off}
                      placeholder="Enter OFF"
                      className="border-[1px] outline-none p-3 text-[11px] rounded-lg "
                      name="off"
                      onChange={handleform}
                      id=""
                    />
                  </div>
                  <div className="inputs w-full flex flex-col gap-2 text-[18px] font-medium">
                    <label htmlFor="">Type</label>
                    <input
                      placeholder="Enter Type"
                      type="text"
                      value={productSet.type}
                      name="type"
                      onChange={handleform}
                      id=""
                      className="border-[1px] outline-none p-3 text-[11px] rounded-lg  "
                    />
                  </div>
                </div>
                <div className="maininput flex-col md:flex-row lg:flex flex gap-4">
                  <div className="inputs w-full flex flex-col gap-2 text-[18px] font-medium">
                    <label htmlFor=""> New Price</label>
                    <input
                      placeholder="Enter New Price"
                      type="number"
                      value={productSet.price}
                      name="price"
                      onChange={handleform}
                      id=""
                      className="border-[1px] outline-none p-3 text-[11px] rounded-lg  "
                    />
                  </div>
                  <div className="inputs w-full flex flex-col gap-2 text-[18px] font-medium">
                    <label htmlFor="">Old Price</label>
                    <input
                      placeholder="Enter Old Price"
                      type="number"
                      value={productSet.oldprice}
                      name="oldprice"
                      onChange={handleform}
                      id=""
                      className="border-[1px] outline-none p-3 text-[11px] rounded-lg  "
                    />
                  </div>
                </div>
                <div className="maininput flex-col md:flex-row lg:flex flex gap-4">
                  <div className="inputs w-full flex flex-col gap-2 text-[18px] font-medium">
                    <label htmlFor="">minNegotiablePrice</label>
                    <input
                      placeholder="Enter minNegotiablePrice"
                      type="number"
                      value={productSet.minNegotiablePrice}
                      name="minNegotiablePrice"
                      onChange={handleform}
                      id=""
                      className="border-[1px] outline-none p-3 text-[11px] rounded-lg  "
                    />
                  </div>
                  <div className="inputs  w-full flex flex-col gap-2 text-[18px] font-medium">
                    <label htmlFor="">maxNegotiablePrice</label>
                    <input
                      placeholder="Enter maxNegotiablePrice"
                      type="number"
                      value={productSet.maxNegotiablePrice}
                      name="maxNegotiablePrice"
                      onChange={handleform}
                      id=""
                      className="border-[1px] outline-none p-3 text-[11px] rounded-lg  "
                    />
                  </div>
                </div>
                <div className="maininput flex-col md:flex-row lg:flex flex gap-4">
                  <div className="inputs w-full flex flex-col gap-2 text-[18px] font-medium">
                    <label htmlFor="">material</label>
                    <input
                      placeholder="Enter Material"
                      type="text"
                      value={productSet.material}
                      name="material"
                      onChange={handleform}
                      id=""
                      className="border-[1px] outline-none p-3 text-[11px] rounded-lg  "
                    />
                  </div>
                  <div className="inputs w-full flex flex-col gap-2 text-[18px] font-medium">
                    <label htmlFor=""> design</label>
                    <input
                      placeholder="Enter Design"
                      type="text"
                      value={productSet.design}
                      name="design"
                      onChange={handleform}
                      id=""
                      className="border-[1px] outline-none p-3 text-[11px] rounded-lg  "
                    />
                  </div>
                </div>
                <div className="maininput flex-col md:flex-row lg:flex  flex gap-4">
                  <div className="inputs w-full flex flex-col gap-2 text-[18px] font-medium">
                    <label htmlFor="">customization</label>
                    <input
                      placeholder="Enter Customization"
                      type="text"
                      value={productSet.customization}
                      name="customization"
                      onChange={handleform}
                      id=""
                      className="border-[1px] outline-none p-3 text-[11px] rounded-lg  "
                    />
                  </div>
                  <div className="inputs w-full flex flex-col gap-2 text-[18px] font-medium">
                    <label htmlFor=""> protection</label>
                    <input
                      placeholder="Enter Protection"
                      type="text"
                      value={productSet.protection}
                      name="protection"
                      onChange={handleform}
                      id=""
                      className="border-[1px] outline-none p-3 text-[11px] rounded-lg  "
                    />
                  </div>
                </div>
                <div className="maininput flex-col md:flex-row lg:flex  flex gap-4">
                  <div className="inputs w-full flex flex-col gap-2 text-[18px] font-medium">
                    <label htmlFor="">warranty</label>
                    <input
                      placeholder="Enter Warrenty"
                      type="text"
                      value={productSet.warranty}
                      name="warranty"
                      onChange={handleform}
                      id=""
                      className="border-[1px] outline-none p-3 text-[11px] rounded-lg  "
                    />
                  </div>
                  <div className="inputs w-full flex flex-col gap-2 text-[18px] font-medium">
                    <label htmlFor="">stock</label>
                    <select
                      name="stock"
                      value={productSet.stock}
                      onChange={handleform}
                      choose
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">-- Choose --</option>
                      <option value="true">yes</option>
                      <option value="false">no</option>
                    </select>
                  </div>
                </div>
                <div className="maininput flex-col md:flex-row lg:flex flex gap-4">
                  <div className="inputs w-full flex flex-col gap-2 text-[18px] font-medium">
                    <label htmlFor="">Images</label>
                    <input
                      onChange={handleform}
                      type="file"
                      name="images"
                      accept="image/*"
                      multiple
                      className="border-[1px] outline-none p-3 text-[11px] rounded-lg"
                    />
                  </div>
                  <div className="inputs w-full flex flex-col gap-2 text-[18px] font-medium">
                    <label htmlFor="">Size</label>
                    <input
                      type="text"
                      name="size"
                      value={productSet.size.join(",")}
                      placeholder="e.g. Small, Medium, Large"
                      onChange={handleform}
                      className="border-[1px] outline-none p-3 text-[11px] rounded-lg"
                    />
                  </div>
                </div>
                <div className="maininput flex-col md:flex-row lg:flex flex gap-4">
                  <div className="inputs w-full flex flex-col gap-2 text-[18px] font-medium">
                    <label htmlFor="">color</label>
                    <input
                      type="text"
                      placeholder="Enter color name"
                      className="border-[1px] outline-none p-3 text-[11px] rounded-lg "
                      name="color"
                      value={productSet.color}
                      onChange={handleform}
                      id=""
                    />
                  </div>
                  <div className="inputs w-full flex flex-col gap-2 text-[18px] font-medium">
                    <label htmlFor="">seller</label>
                    <input
                      type="text"
                      placeholder="Enter seller name"
                      className="border-[1px] outline-none p-3 text-[11px] rounded-lg "
                      name="seller"
                      value={productSet.seller}
                      onChange={handleform}
                      id=""
                    />
                  </div>
                </div>
                <div className="maininput flex-col md:flex-row lg:flex flex gap-4">
                  <div className="inputs w-full flex flex-col gap-2 text-[18px] font-medium">
                    <label htmlFor="">Recommended</label>
                    <select
                      name="recommended"
                      value={productSet.recommended}
                      onChange={handleform}
                      choose
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">-- Choose --</option>
                      <option value="true">yes</option>
                      <option value="false">no</option>
                    </select>
                  </div>
                  <div className="inputs w-full flex flex-col gap-2 text-[18px] font-medium">
                    <label htmlFor="">rating</label>
                    <input
                      type="number"
                      placeholder="Enter rating Number"
                      className="border-[1px] outline-none p-3 text-[11px] rounded-lg "
                      name="rating"
                      value={productSet.rating}
                      onChange={handleform}
                      id=""
                    />
                  </div>
                </div>
                <div className="maininput flex-col md:flex-row lg:flex flex gap-4">
                  <div className="inputs w-full flex flex-col gap-2 text-[18px] font-medium">
                    <label htmlFor=""> sold</label>
                    <input
                      type="number"
                      placeholder="Enter sold Number"
                      className="border-[1px] outline-none p-3 text-[11px] rounded-lg "
                      name="sold"
                      value={productSet.sold}
                      onChange={handleform}
                      id=""
                    />
                  </div>
                  <div className="inputs w-full flex flex-col gap-2 text-[18px] font-medium">
                    <label htmlFor="">review</label>
                    <input
                      type="number"
                      placeholder="Enter Review Number"
                      className="border-[1px] outline-none p-3 text-[11px] rounded-lg "
                      name="review"
                      value={productSet.review}
                      onChange={handleform}
                      id=""
                    />
                  </div>
                </div>

                <button className="bg-blue-300 p-3 rounded-lg text-white  font-medium text-[17px] outline-none border-none w-[200px] mx-auto">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </Dialog>
      </div>

      <div className="section2">
        <GetProduct />
      </div>
    </div>
  );
};

export default UploadProduct;
