const SEND_MESSAGE = 'SEND-MESSAGE';

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
}

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type){
        case SEND_MESSAGE:
            let newMess = {
                id: 6, 
                message: action.newMessage
            }
            return {
                ...state,
                messages: [...state.messages, newMess],
            }
        default: 
            return state;
        }
    }

export const sendMessage = (newMessage) => ({type: SEND_MESSAGE, newMessage});

export default dialogsPageReducer;