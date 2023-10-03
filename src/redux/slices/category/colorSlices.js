import baseURL from "../../../utils/baseURL";
import axios from "axios";
const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

//initialState
const initialState = {
  colors: [],
  color: {},
  loading: false,
  error: null,
  isAdded: false,
  isUpdated: false,
  isDeleted: false,
};

//create color action

export const createColorsAction = createAsyncThunk(
  "color/create",
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
      const { data } = await axios.post(`${baseURL}/colors`, {
        name   
      },config);
      return data;
    } catch (error) {}
  }
);

//fetch Colors action

export const fetchColorsAction = createAsyncThunk(
  "colors/fetch All",
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
      const { data } = await axios.get(`${baseURL}/colors`);
      return data;
    } catch (error) {}
  }
);



//slice
const colorSlice = createSlice({
  name: "colors",
  initialState,
  extraReducers: (builder) => {
    //create
    builder.addCase(createColorsAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createColorsAction.fulfilled, (state, action) => {
      state.loading = false;
      state.color = action.payload;
      state.isAdded = true;
    });
    builder.addCase(createColorsAction.rejected, (state, action) => {
      state.loading = false;
      state.color = null;
      state.isAdded = false;
      state.error = action.payload;
    });
    //fetch all
    builder.addCase(fetchColorsAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchColorsAction.fulfilled, (state, action) => {
      state.loading = false;
      state.colors = action.payload;
      state.isAdded = true;
    });
    builder.addCase(fetchColorsAction.rejected, (state, action) => {
      state.loading = false;
      state.colors = null;
      state.isAdded = false;
      state.error = action.payload;
    });
  },
});

//generate the reducer
const colorsReducer = colorSlice.reducer;
export default colorsReducer;
