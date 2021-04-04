import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";

let store = {

    _state : {
        dialogsPage:{
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
        },    
        profilePage:{
            posts : [
                { id: 1, message: 'First post!', likes: 11 },
                { id: 2, message: 'Second post!', likes: 22 },
                { id: 3, message: 'Third post!', likes: 33 }
            ],
            newPostText: ''
        },
        sideBarData: {
            friends : [
                { id: 1, name: 'Nastya', avatar: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Avatar_2_logo.jpg' },
                { id: 2, name: 'Diana', avatar: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Avatar_2_logo.jpg' },
                { id: 3, name: 'Alisa', avatar: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Avatar_2_logo.jpg' }
            ]
        }
    },
    _callSubscriber(){
        console.log('rerender');
    },
    subscribe(observe){
        this._callSubscriber = observe;
    },
    getState(){
        return this._state;
    },

    dispatch(action){
        this._state.profilePage = profilePageReducer(this._state.profilePage, action); 
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._callSubscriber(this.getState());
    }
}

export { store };