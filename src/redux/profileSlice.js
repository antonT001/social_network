import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    postsData: [
        { id: 1, message: "It's my first post!!!", likesCount: '15' },
        { id: 2, message: 'Hi, how are you?', likesCount: '3' }
      ],
      textareaData: ""
};

const profileSlice = createSlice({
    name: 'profilePage',
    initialState: initialState,
    reducers: {
        profileAddPost(state,action) {
            if (state.textareaData === "") return;
             let newPost = {
                 id: 3,
                 message: state.textareaData,
                 likesCount: 0
            }
            
            state.postsData.push(newPost);
            state.textareaData = ""
        },
        profileChangePostElement(state, action) {
            state.textareaData = action.payload;
        }
    }
})


export const { profileAddPost, profileChangePostElement } = profileSlice.actions

export default profileSlice.reducer; 