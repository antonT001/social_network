const ADD_POST = 'ADD-POST';
const CHANGE_POST_ELEMENT = 'CHANGE-POST-ELEMENT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE_ELEMENT = 'CHANGE-MESSAGE-ELEMENT';

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
    switch (action.type) {
      case ADD_POST:
        if (this._state.profilePage.textareaData === "") return;
        let newPost = {
          id: 3,
          message: this._state.profilePage.textareaData,
          likesCount: 0
        }
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.textareaData = ""
        this._callSubscriber(this._state);
        break;
      case CHANGE_POST_ELEMENT:
        this._state.profilePage.textareaData = action.newText;
        this._callSubscriber(this._state);
        break;

      case ADD_MESSAGE:
        if (this._state.dialogsPage.textareaData === "") return;
        let newMessage = {
          id: 4,
          message: this._state.dialogsPage.textareaData
        }
        this._state.dialogsPage.messegesData.push(newMessage);
        this._state.dialogsPage.textareaData = ""
        this._callSubscriber(this._state);
        break;

      case CHANGE_MESSAGE_ELEMENT:
        this._state.dialogsPage.textareaData = action.newText;
        this._callSubscriber(this._state);
        break;

      default:
        break;
    }
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const changePostElementActionCreator = (text) => ({ type: CHANGE_POST_ELEMENT, newText: text });
export const changeDialogsElementActionCreator = (text) => ({ type: CHANGE_MESSAGE_ELEMENT, newText: text });
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export default store; 