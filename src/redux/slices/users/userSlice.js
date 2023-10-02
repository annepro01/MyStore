import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../../../utils/baseURL";
import { resetErrAction } from "../globalActions/globalAction";



//initialState
const initialState = {
    loading : false,
    error: null,
    users: [],
    user:{},
    profile: {},
    userAuth: {
        loading: false,
        error: null,
        userInfo: {}
    }
}
//register action
export const registerUserAction = createAsyncThunk(
  "users/register",
  async ({fullname,email,password}, { rejectWithValue, getState, dispatch }) => {
    try {
      //make the http request 
      const {data} = await axios.post(`${baseURL}/users/register`, {
        email,
        password,
        fullname
      },);
      return data;   
    } catch (error) {
     console.log(error)
      return rejectWithValue(error?.response?.data);
    }
  }
);



//login action
export const loginUserAction = createAsyncThunk(
    "users/login",
    async ({email,password}, { rejectWithValue, getState, dispatch }) => {
      try {
        //make the http request 
        const {data} = await axios.post(`${baseURL}/users/login`, {
          email,
          password
        },);
       //save the user into localstorage
        localStorage.setItem('userInfo',JSON.stringify(data))

        return data;
        
      } catch (error) {
       console.log(error)
        return rejectWithValue(error?.response?.data);
      }
    }
  );
  
//user slice 

const usersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {
        //handle actions
        
        //login---------------
        builder.addCase(loginUserAction.pending,(state,action) => {
            state.userAuth.loading = true;

        });

        builder.addCase(loginUserAction.fulfilled,(state,action) => {
            state.userAuth.userInfo = action.payload;
            state.userAuth.loading = false;

        });

        builder.addCase(loginUserAction.rejected,(state,action) => {
            state.userAuth.error = action.payload
            state.userAuth.loading = false;
        })

        //register-----------
        builder.addCase(registerUserAction.pending,(state,action) => {
          state.loading = true;

         });

        builder.addCase(registerUserAction.fulfilled,(state,action) => {
          state.user = action.payload;
          state.loading = false;

          });

        builder.addCase(registerUserAction.rejected,(state,action) => {
          state.error = action.payload
          state.loading = false;
        });
        //reset error action
        builder.addCase(resetErrAction.pending,(state) => {
            state.error = null;
        }); 
    }

})

//generate reducers

const usersReducer = usersSlice.reducer;

export default usersReducer;
