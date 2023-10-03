import baseURL from "../../../utils/baseURL";
import axios from "axios";
const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

//initialState
const initialState = {
  brands: [],
  brand: {},
  loading: false,
  error: null,
  isAdded: false,
  isUpdated: false,
  isDeleted: false,
};

//create brand action

export const createBrandAction = createAsyncThunk(
  "brand/create",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { name } =
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
      const { data } = await axios.post(`${baseURL}/brands`, {
        name   
      },config);
      return data;
    } catch (error) {}
  }
);

//fetch Brands action

export const fetchBrandsAction = createAsyncThunk(
  "brands/fetch All",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { name } =
        payload;

        // //Token - Authenticated
        // const token = getState().user?.userAuth?.userInfo?.token;
        // console.log(token)

        // const config = {
        //     headers: {
        //         Authorization: `Bearer ${token}`
        //     }
        // }

      //make request
      const { data } = await axios.get(`${baseURL}/brands`);
      return data;
    } catch (error) {}
  }
);



//slice
const brandsSlice = createSlice({
  name: "brands",
  initialState,
  extraReducers: (builder) => {
    //create
    builder.addCase(createBrandAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createBrandAction.fulfilled, (state, action) => {
      state.loading = false;
      state.brand = action.payload;
      state.isAdded = true;
    });
    builder.addCase(createBrandAction.rejected, (state, action) => {
      state.loading = false;
      state.brand = null;
      state.isAdded = false;
      state.error = action.payload;
    });
    //fetch all
    builder.addCase(fetchBrandsAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBrandsAction.fulfilled, (state, action) => {
      state.loading = false;
      state.brands = action.payload;
      state.isAdded = true;
    });
    builder.addCase(fetchBrandsAction.rejected, (state, action) => {
      state.loading = false;
      state.brands = null;
      state.isAdded = false;
      state.error = action.payload;
    });
  },
});

//generate the reducer
const brandsReducer = brandsSlice.reducer;
export default brandsReducer;
