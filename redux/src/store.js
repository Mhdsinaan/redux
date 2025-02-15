import {configureStore} from "@reduxjs/toolkit"
import colorReducer from "./colorSlice"
const store=configureStore({

    reducer:{
        theme:colorReducer,

    }
})
export default store;