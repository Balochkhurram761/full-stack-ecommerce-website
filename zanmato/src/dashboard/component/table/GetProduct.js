import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Update from "../singleProduct/Update";

const GetProduct = () => {
  const [message, setMessage] = useState("");
  const [products, setProducts] = useState([]);
  const [totalPage, setTotalPage] = useState();
  const [totalProduct, setTotalProduct] = useState("");
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem("token");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpen = (id) => {
    const prod = products.find((item) => item._id === id);

    setSelectedProduct(prod);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

    getData(); // refresh updated data
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/auth/deleteproduct/${id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage("Product deleted successfully.");
      getData();
    } catch (error) {
      setMessage(error?.response?.data?.message || "Error deleting product.");
    }
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/auth/getproduct?page=${page}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProducts(response.data.ProductUser);
      setTotalProduct(response.data.totalProducts);
      setTotalPage(response.data.totalPages);
    } catch (error) {
      setMessage(error?.response?.data?.message || "Server Error");
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="px-3 mx-auto w-[90%]">
      <h2 className="text-xl font-semibold mb-4">Product List</h2>

      {message && (
        <div className="mb-2 text-red-600 font-medium">{message}</div>
      )}

      <div className="overflow-auto w-auto">
        <table className="w-auto text-sm text-left bg-white shadow rounded-lg">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-2 whitespace-nowrap">Image</th>
              <th className="p-2 whitespace-nowrap">SKU</th>
              <th className="p-2 whitespace-nowrap">Category</th>
              <th className="p-2 whitespace-nowrap">Title</th>
              <th className="p-2 whitespace-nowrap">Old Price</th>
              <th className="p-2 whitespace-nowrap">New Price</th>
              <th className="p-2 whitespace-nowrap">Type</th>
              <th className="p-2 whitespace-nowrap">Stock</th>
              <th className="p-2 whitespace-nowrap">Recommended</th>
              <th className="p-2 whitespace-nowrap text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y divide-gray-200">
            {products.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-2">
                  <img
                    src={`http://localhost:5000/${item.images[0]}`}
                    alt="Product"
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="p-2 whitespace-nowrap">{item.sku}</td>
                <td className="p-2 whitespace-nowrap">{item.category}</td>
                <td className="p-2 whitespace-nowrap">{item.title}</td>
                <td className="p-2 whitespace-nowrap">{item.oldprice}</td>
                <td className="p-2 whitespace-nowrap">{item.price}</td>
                <td className="p-2 whitespace-nowrap">{item.type}</td>
                <td className="p-2 whitespace-nowrap">
                  {item.stock ? "yes" : "No"}
                </td>
                <td className="p-2 whitespace-nowrap">
                  {item.recommended ? "Yes" : "No"}
                </td>
                <td className="p-2 whitespace-nowrap text-center space-x-2">
                  <Button
                    onClick={() => handleOpen(item._id)}
                    className="px-2 py-1 text-white text-xs rounded bg-blue-900 hover:bg-blue-800"
                  >
                    Edit
                  </Button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="11" className="p-4 text-center text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Stack direction="row" spacing={0} className="mt-4">
        <Pagination
          count={totalPage}
          page={page}
          onChange={(event, value) => setPage(value)}
          color="success"
          variant="outlined"
          size="medium"
          shape="rounded"
        />
      </Stack>

      {selectedProduct && (
        <Update
          open={open}
          handleClose={handleClose}
          ProductUpdated={selectedProduct}
        />
      )}
    </div>
  );
};

export default GetProduct;
