import { configureStore } from "@reduxjs/toolkit";
import mohSlice from "./moh-slice"
import personSlice from "./people-slice"

const store = configureStore({
    reducer:{
        moh:mohSlice,
        people:personSlice
    }
})

export default store