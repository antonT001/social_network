import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileSlice";
import dialogsReducer from "./dialogsSlice";
import sidebarReducer from "./sidebarSlice"
import usersReducer from "./usersSlice"


let store = configureStore({
    reducer: {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer

    }
});

export default store