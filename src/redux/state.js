let state = {
    dialogsPage:{
        dialogs : [
            { id: 1, name: 'Dima' },
            { id: 2, name: 'Juli' },
            { id: 3, name: 'Mark' },
            { id: 4, name: 'Vasilisa' },
            { id: 5, name: 'Olivia' }
        ],
        messages : [
            { id: 1, message: 'Hello' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'I love you' },
        ],
    },    profilePage:{
        posts : [
            { id: 1, message: 'First post!', likes: 11 },
            { id: 2, message: 'Second post!', likes: 22 },
            { id: 3, message: 'Third post!', likes: 33 }
        ]
    }
}

export { state };