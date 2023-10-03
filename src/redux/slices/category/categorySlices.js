import baseURL from "../../../utils/baseURL";
import axios from "axios";
const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

//initialState
const initialState = {
  categories: [],
  category: {},
  loading: false,
  error: null,
  isAdded: false,
  isUpdated: false,
  isDeleted: false,
};

//create category action

export const createCategoryAction = createAsyncThunk(
  "category/create",
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
      const { data } = await axios.post(`${baseURL}/categories`, {
        name   
      },config);
      return data;
    } catch (error) {}
  }
);

//fetch Categories action

export const fetchCategoryAction = createAsyncThunk(
  "category/fetch All",
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
      const { data } = await axios.get(`${baseURL}/categories`);
      return data;
    } catch (error) {}
  }
);



//slice
const categorySlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    //create
    builder.addCase(createCategoryAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createCategoryAction.fulfilled, (state, action) => {
      state.loading = false;
      state.category = action.payload;
      state.isAdded = true;
    });
    builder.addCase(createCategoryAction.rejected, (state, action) => {
      state.loading = false;
      state.category = null;
      state.isAdded = false;
      state.error = action.payload;
    });
    //fetch all
    builder.addCase(fetchCategoryAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCategoryAction.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
      state.isAdded = true;
    });
    builder.addCase(fetchCategoryAction.rejected, (state, action) => {
      state.loading = false;
      state.categories = null;
      state.isAdded = false;
      state.error = action.payload;
    });
  },
});

//generate the reducer
const categoryReducer = categorySlice.reducer;
export default categoryReducer;
