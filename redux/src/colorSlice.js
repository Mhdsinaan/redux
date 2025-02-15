import { createSlice } from "@reduxjs/toolkit";
 const colorSlice=createSlice({
    name:"theme",
    initialState:{isBlack:true},
    reducers:{
    color:(state)=>{
        state.isBlack=!state.isBlack
    }
}

 })
 export default colorSlice.reducer
 export const{color}=colorSlice.actions
 

