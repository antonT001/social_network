import { getAllByDisplayValue } from "@testing-library/react";

let rerenderEntireTree = () =>{
  ;
}



let state = {
  profilePage: {
    postsData: [
      { id: 1, message: "It's my first post!!!", likesCount: '15' },
      { id: 2, message: 'Hi, how are you?', likesCount: '3' }
    ],
    textareaData: ""
  },

  dialogsPage: {
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
  },
  sidebar: [
    { id: 1, name: 'Valera', ava: 'https://pixelbox.ru/wp-content/uploads/2020/12/avatar-youtube-10.jpg' },
    { id: 2, name: 'Sveta', ava: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg' },
    { id: 3, name: 'Andrey', ava: 'https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg' }
  ]
}

export const addPost = () => {
  if (state.profilePage.textareaData == "") return;
  let newPost = {
    id: 3,
    message: state.profilePage.textareaData,
    likesCount: 0
  }
  state.profilePage.postsData.push(newPost);
  state.profilePage.textareaData = ""
  rerenderEntireTree(state);
}

export const changePostElement = (text) => {

  state.profilePage.textareaData = text;
  rerenderEntireTree(state);
}

export const addMessage = () => {
  if (state.dialogsPage.textareaData == "") return;
  let newMessage = {
    id: 4,
    message: state.dialogsPage.textareaData
  }
  state.dialogsPage.messegesData.push(newMessage);
  state.dialogsPage.textareaData = ""
  rerenderEntireTree(state);
}

export const changeMessageElement = (text) => {

  state.dialogsPage.textareaData = text;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer
}


export default state; 