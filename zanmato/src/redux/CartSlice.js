import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  savedItems: [],
};

const cartSlice = createSlice({
  name: "shoppingcart",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const itemindex = state.carts.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemindex >= 0) {
        state.carts[itemindex].qnty += 1;
      } else {
        let temp = { ...action.payload, qnty: 1 };
        state.carts.push(temp);
      }
      console.log("the reducer", state.carts);
    },

    removetocart: (state, action) => {
      const itemindex = state.carts.findIndex(
        (item) => item._id === action.payload
      );
      if (itemindex >= 0 && state.carts[itemindex].qnty > 1) {
        state.carts[itemindex].qnty -= 1;
      } else {
        state.carts.splice(itemindex, 1);
      }
    },

    emptycart: (state) => {
      state.carts = [];
    },
    saveForLater: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        const [item] = state.carts.splice(itemIndex, 1); // remove from cart
        state.savedItems.push(item); // add to saved
      }
    },

    moveToCart: (state, action) => {
      const itemIndex = state.savedItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        const [item] = state.savedItems.splice(itemIndex, 1); // remove from saved
        state.carts.push({ ...item, qnty: item.qnty || 1 }); // add to cart
      }
    },
    removesaveditem: (state, action) => {
      const itemIndex = state.savedItems.findIndex(
        (item) => item._id === action.payload
      );

      if (itemIndex >= 0) {
        state.savedItems.splice(itemIndex, 1);
      }
    },
    emptysaved: (state) => {
      state.savedItems = [];
    },
  },
});

export const {
  addtocart,
  removetocart,
  emptycart,
  saveForLater,
  moveToCart,
  emptysaved,
  removesaveditem,
} = cartSlice.actions;
export default cartSlice.reducer;
