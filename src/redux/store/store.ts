import {userSlice} from "../userSlice/userSlice.ts";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        // postSlice: null
    }
})