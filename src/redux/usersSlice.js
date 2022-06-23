import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    users: []
};

const usersSlice = createSlice({
    name: 'usersPage',
    initialState: initialState,
    reducers: {
        usersFollow(state,action) {
           for (let index = 0; index < state.users.length; index++) {
            if (state.users[index].id === action.payload) {
                state.users[index].followed = true
                break;
            }
           }
        },
        usersUnfollow(state, action) {
            for (let index = 0; index < state.users.length; index++) {
                if (state.users[index].id === action.payload) {
                    state.users[index].followed = false
                    break;
                }
               }
        },
        setUsers(state, action) {
            state.users = action.payload
        }
    }
})


export const {usersFollow, usersUnfollow, setUsers} = usersSlice.actions

export default usersSlice.reducer; 