import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileSlice";
import dialogsReducer from "./dialogsSlice";
import sidebarReducer from "./sidebarSlice"



let store = configureStore({
    reducer: {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer
    }
});

export default store