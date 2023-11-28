import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./reducers/dashboard/dashboard.reducer";

export const store = configureStore({
    reducer: {
        dashboard: dashboardReducer
    } 
})
