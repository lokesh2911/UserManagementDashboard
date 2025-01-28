import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserReducer"; // Ensure consistent casing

const store = configureStore({
    reducer: {
        users: userReducer, // Matches the import name
    },
});

export default store;
