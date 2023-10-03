import baseURL from "../../../utils/baseURL";
import axios from "axios";
const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

//initialState
const initialState = {
  products: [],
  product: {},
  loading: false,
  error: null,
  isAdded: false,
  isUpdated: false,
  isDeleted: false,
};

//create product action

export const createProductAction = createAsyncThunk(
  "product/create",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { name, description, brand, category, sizes, colors, price } =
        payload;
        //Token - Authenticated
        const token = getState().user?.userAuth?.userInfo?.token;
        console.log(token)

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

      //make request
      const { data } = await axios.post(`${baseURL}/products`, {
        name,
        description,
        brand,
        category,
        sizes,
        colors,
        price,
      },config);
      return data;
    } catch (error) {}
  }
);

//slice

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    //create
    builder.addCase(createProductAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createProductAction.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
      state.isAdded = true;
    });
    builder.addCase(createProductAction.rejected, (state, action) => {
      state.loading = false;
      state.product = null;
      state.isAdded = false;
      state.error = action.payload;
    });
  },
});

//generate the reducer
const productReducer = productSlice.reducer;
export default productReducer;
