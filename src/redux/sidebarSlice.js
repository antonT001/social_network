import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    sidebar:[
        { id: 1, name: 'Valera', ava: 'https://pixelbox.ru/wp-content/uploads/2020/12/avatar-youtube-10.jpg' },
        { id: 2, name: 'Sveta', ava: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg' },
        { id: 3, name: 'Andrey', ava: 'https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg' }
      ]
};

const sidebarSlice = createSlice({
    name: 'sidebarPage',
    initialState: initialState,
    reducers: {}
})

export default sidebarSlice.reducer; 