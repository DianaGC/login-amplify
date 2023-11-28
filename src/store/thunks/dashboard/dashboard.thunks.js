import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_ROUTES } from "../../../shared/api_routes";
import axios from "../../../shared/axios-utils";

const  getDigimons = createAsyncThunk("dashboard/getDigimons", async (payload) => {
    console.log("fff1111",payload)
    const response = await axios.get(API_ROUTES.GET_DIGIMONS);
    console.log("fff",response)
    return response.data
})

const getDigimon = createAsyncThunk("dashboard/getDigimon", async (payload) => {
    const response = await axios.get(API_ROUTES.GET_DIGIMON, payload);
    return response.data
})

export {
    getDigimon,
    getDigimons
}