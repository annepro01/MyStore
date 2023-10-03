import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { fetchCategoryAction } from '../../../redux/slices/category/categorySlices';
import { createProductAction } from "../../../redux/slices/product/productSlices";
import { fetchBrandsAction } from "../../../redux/slices/category/brandSlices";
import { fetchColorsAction } from '../../../redux/slices/category/colorSlices';
import ErrorMsg from "../../ErrorMsg/ErrorMsg";
import LoadingComponent from '../../LoadingComp/LoadingComponents';
import SuccessMsg from "../../SuccessMsg/SuccessMsg";



const animatedComponents = makeAnimated();


const AddProduct = () => {
  const dispatch = useDispatch();
  //Sizes
  const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];
  const [sizeOption, setSizeOption] = useState([]);
  const handleSizeChange = (sizes) => {
    setSizeOption(sizes);
  };
  //colors
  const [colorsOption, setColorsOption] = useState([]);
  //converted sizes
  const sizeOptionsCoverted = sizes.map((size) => {
    return {
      value: size,
      label: size,
    };
  });

  //categories
  useEffect(() => {
    dispatch(fetchCategoryAction);
  }, [dispatch]);

  //select data from store
  const { categories, loading, error } = useSelector(
    (state) => state?.categories?.categories
  );

  //brands
  useEffect(() => {
    dispatch(fetchBrandsAction);
  }, [dispatch]);

  //select data from store
  const {
    brands: { brands },
  } = useSelector((state) => state?.brands);

  ////
  //colors
  useEffect(() => {
    dispatch(fetchColorsAction);
  }, [dispatch]);

  //select data from store
  const {
    colors: { colors },
  } = useSelector((state) => state?.colors);

  const handleColorChangeOption = (colors) => {
    setColorsOption(colors)
  };

  const colorsCoverted = colors?.map((color) => {
    return {
      value: color?.name,
      label: color?.label,
    };
  });

  let isAdded;

  //---form data---
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    sizes: "",
    brand: "",
    colors: "",
    images: "",
    price: "",
    totalQty: "",
  });

  //onChange
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // onSubmit Handler
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(sizeOption);
    //dispatch
    dispatch(createProductAction({ formData }));
  };

  return (
    <>
      {error && <ErrorMsg message={error?.message} />}
      {isAdded && <SuccessMsg message="Product Added Successfully" />}
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Create New Products
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            <p className="font-medium text-indigo-600 hover:text-indigo-500">
              Manage Products
            </p>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm-px-10">
            <form className="space-y-6" onSubmit={handleOnSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Product Name
                </label>
                <div>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleOnChange}
                    placeholder="Name of Product"
                    className="block w-full apperance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 shadow-sm focus-border-indigo-500 focus-outline-none focus-ring-indigo-500 sm-text-sm"
                  ></input>
                </div>
              </div>
              {/* size option */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Select Size
                </label>
                <Select
                  // components={animatedComponents}
                  isMulti
                  name="sizes"
                  options={sizeOptionsCoverted}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  isClearable={true}
                  isLoading={false}
                  isSearchable={true}
                  closeMenuOnSelect={false}
                  onChange={(item) => handleSizeChange(item)}
                ></Select>
              </div>
              {/* select category  */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Select Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleOnChange}
                  className="mt-1 block m-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm border"
                  defaultValue="Canada"
                >
                  {" "}
                  <option> -- Select Category-- </option>
                  {categories?.map((category) => (
                    <option key={category?._id} value={category?.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              {/* select brand            */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Select Brand
                </label>

                <select
                  name="brand"
                  value={formData.brand}
                  className="mt-1 block m-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm border"
                  defaultValue="Canada"
                >
                  <option> --Select Brand-- </option>
                  {brands?.map((brand) => (
                    <option key={brand?._id} value={brand?.name}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </div>
              {/* select color            */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Select Colors
                </label>
                <Select
                  components={animatedComponents}
                  isMulti
                  name="colors"
                  options={colorsCoverted}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  isClearable={true}
                  isLoading={false}
                  isSearchable={true}
                  closeMenuOnSelect={false}
                  onChange={(e) => handleColorChangeOption(e)}
                ></Select>
              </div>
              {/* upload images  */}
              <div>
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Upload Images
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <div className="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload files</span>
                          <input
                            name="images"
                            value={formData.images}
                            onChange={handleOnChange}
                            className="flex "
                            type="file"
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* price  */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Price
                </label>
                <div>
                  <input
                    name="price"
                    value={formData.price}
                    onChange={handleOnChange}
                    type="number"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* quantity  */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Total Quantity
                </label>
                <div>
                  <input
                    name="totalQty"
                    value={formData.totalQty}
                    onChange={handleOnChange}
                    type="number"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* description        */}
              <div>
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium text-gray-700"
                >
                  Add Product Description
                </label>
                <div className="mt-1">
                  <textarea
                    rows={4}
                    name="description"
                    value={formData.description}
                    onChange={handleOnChange}
                    className="block w-full rounded-md border-gray-300 border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                {loading ? (
                  <LoadingComponent />
                ) : (
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add Product
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct