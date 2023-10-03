import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slices/users/userSlice";
import productReducer from "../slices/product/productSlices";
import categoryReducer from "../slices/category/categorySlices";
import brandsReducer from "../slices/category/brandSlices";
import colorsReducer from "../slices/category/colorSlices";

//store

const store = configureStore({
  reducer: {
    user: usersReducer,
    products: productReducer,
    categories: categoryReducer,
    brands: brandsReducer,
    colors: colorsReducer,
  },
});

export default store;