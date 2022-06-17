const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE_ELEMENT = 'CHANGE-MESSAGE-ELEMENT';

let dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            if (state.textareaData === "") return;
            let newMessage = {
                id: 4,
                message: state.textareaData
            }
            state.messegesData.push(newMessage);
            state.textareaData = ""
            return state;

        case CHANGE_MESSAGE_ELEMENT:
            state.textareaData = action.newText;
            return state;

        default:
            return state;
    }
}

export const changeDialogsElementActionCreator = (text) => ({ type: CHANGE_MESSAGE_ELEMENT, newText: text });
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export default dialogsReducer;


