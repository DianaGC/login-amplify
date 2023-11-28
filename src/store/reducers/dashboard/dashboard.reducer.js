import { createSlice } from "@reduxjs/toolkit";
import { getDigimons } from "../../thunks/dashboard/dashboard.thunks";

export const initialState = {
    digimons: [],
    digimon: {} 
}

export const dashboardSlice = createSlice({
  initialState,
  name: "dashboard",
  reducers: {
    updateValueDigimon:(state,{payload})=>{
        state.digimon = payload
    },
    setDigimons: (state, {payload}) =>{
        state.digimons = payload
    }
  }
})

export default dashboardSlice.reducers