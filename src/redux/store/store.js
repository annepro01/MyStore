import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slices/users/userSlice";

//store

const store = configureStore({
    reducer: {
        user: usersReducer,
    }
});

export default store;