const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {
    dialogs : [
        { id: 1, name: 'Dima', avatar: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Avatar_2_logo.jpg'},
        { id: 2, name: 'Juli', avatar: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Avatar_2_logo.jpg'},
        { id: 3, name: 'Mark', avatar: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Avatar_2_logo.jpg'},
        { id: 4, name: 'Vasilisa', avatar: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Avatar_2_logo.jpg'},
        { id: 5, name: 'Olivia', avatar: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Avatar_2_logo.jpg'}
    ],
    messages : [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'I love you' },
    ],
    newMessageBody: ''
}

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type){
        case SEND_MESSAGE:
            let newMess = {
                id: 6, message: state.newMessageBody
            }
            return {
                ...state,
                messages: [...state.messages, newMess],
                newMessageBody: ''
            }
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.newMessageBody
            }
        default: 
            return state;
        }
    }

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (newMessage) => ({type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: newMessage});

export default dialogsPageReducer;