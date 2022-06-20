import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    dialogsData: [
        { id: 1, name: 'Valera', ava: 'https://pixelbox.ru/wp-content/uploads/2020/12/avatar-youtube-10.jpg' },
        { id: 2, name: 'Sveta', ava: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg' },
        { id: 3, name: 'Andrey', ava: 'https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg' },
        { id: 4, name: 'Max', ava: 'https://games.mail.ru/hotbox/content_files/gallery/2020/12/11/d49a024e7ade40858a10df3b8976625d.png' },
        { id: 5, name: 'Fedot', ava: 'https://coolsen.ru/wp-content/uploads/2021/09/11-900x563.jpg' },
      ],
      messegesData: [
        { id: 1, message: 'Message 1' },
        { id: 2, message: 'Message 2' },
        { id: 3, message: 'Message 3' }
      ],
      textareaData: ""
};

const dialogsSlice = createSlice({
    name: 'dialogsPage',
    initialState: initialState,
    reducers: {
        dialogsAddMessage(state,action) {
            if (state.textareaData === "") return;
            let newMessage = {
                id: 4,
                message: state.textareaData
            }
            state.messegesData.push(newMessage);
            state.textareaData = ""
        },
        dialogsChangeMessageElement (state, action) {
            state.textareaData = action.payload;
        }
    }
})


export const { dialogsAddMessage, dialogsChangeMessageElement } = dialogsSlice.actions

export default dialogsSlice.reducer; 