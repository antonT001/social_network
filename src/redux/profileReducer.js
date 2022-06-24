const ADD_POST = 'ADD-POST';
const CHANGE_POST_ELEMENT = 'CHANGE-POST-ELEMENT';

let initialState = {
    postsData: [
        { id: 1, message: "It's my first post!!!", likesCount: '15' },
        { id: 2, message: 'Hi, how are you?', likesCount: '3' }
      ],
      textareaData: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.textareaData === "") return;
            let newPost = {
                id: 3,
                message: state.textareaData,
                likesCount: 0
            }
            state.postsData.push(newPost);
            state.textareaData = ""
            return state;

        case CHANGE_POST_ELEMENT:
            state.textareaData = action.newText;
            return state;

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const changePostElementActionCreator = (text) => ({ type: CHANGE_POST_ELEMENT, newText: text });

export default profileReducer; 