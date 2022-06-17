import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"



let store = {
  _state: {
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
  },
  _callSubscriber() {
    ;
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar)

    this._callSubscriber(this._state);
  }
}




export default store; 