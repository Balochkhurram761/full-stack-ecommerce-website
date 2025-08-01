import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { moveToCart, removesaveditem } from "../../redux/CartSlice";

const SavedHeart = () => {
  const dispatch = useDispatch();
  const { savedItems } = useSelector((state) => state.cartSlice);
  const handleremove = (item) => {
    dispatch(removesaveditem(item));
  };
  if (savedItems.length === 0) return null;

  return (
    <div className="w-full  mx-auto bg-white rounded-xl mt-6 p-4">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        ❤️ Saved for Later ({savedItems.length})
      </h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {savedItems.map((item) => (
          <div
            key={item._id}
            className="border border-gray-200 p-2 rounded-lg  flex flex-col  gap-2 shadow-sm"
          >
            <div className="image w-full aspect-[6/4] overflow-hidden rounded-md">
              <img
                src={`http://localhost:5000/${item.images[0]}`}
                alt={item.title}
                className="w-full h-full object-contain mx-auto"
              />
            </div>

            <div className="body">
              <h3 className="text-md font-medium truncate">{item.title}</h3>
              <p className="text-gray-500 text-sm">${item.price.toFixed(2)}</p>

              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => dispatch(moveToCart(item))}
                  className="text-white bg-[#00B517] hover:bg-[#009e15] px-3 py-1 text-sm rounded"
                >
                  Move to Cart
                </button>
                <button
                  onClick={() => handleremove(item._id)}
                  className="text-red-600 border border-red-300 hover:bg-red-50 px-3 py-1 text-sm rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedHeart;
