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
        if(action.type === 'ADD-POST'){
            let newPost = {
                id: 4,
                message : this._state.profilePage.newPostText,
                likes: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this.getState());
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this.getState());
        }
    }
}

export { store };