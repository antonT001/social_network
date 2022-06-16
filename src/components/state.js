import { getAllByDisplayValue } from "@testing-library/react";
import rerenderEntireTree from "../render";

let state = {
  profilePage: {
    postsData: [
      { id: 1, message: "It's my first post!!!", likesCount: '15' },
      { id: 2, message: 'Hi, how are you?', likesCount: '3' }
    ]
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
      { id: 1, text: 'Message 1' },
      { id: 2, text: 'Message 2' },
      { id: 3, text: 'Message 3' }
    ]
  },
  sidebar: [
    { id: 1, name: 'Valera', ava: 'https://pixelbox.ru/wp-content/uploads/2020/12/avatar-youtube-10.jpg' },
    { id: 2, name: 'Sveta', ava: 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg' },
    { id: 3, name: 'Andrey', ava: 'https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg' }
  ]
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 3,
    message: postMessage,
    likesCount: 0
  }
  state.profilePage.postsData.push(newPost);
  rerenderEntireTree(state);
}

export default state; 