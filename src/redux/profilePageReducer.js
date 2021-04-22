import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_PROFILE';

let initialState = {
    posts : [
        { id: 1, message: 'First post!', likes: 11 },
        { id: 2, message: 'Second post!', likes: 22 },
        { id: 3, message: 'Third post!', likes: 33 }
    ],
    newPostText: '',
    profile: null
}

const profilePageReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 4,
                message : state.newPostText,
                likes: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileInfo(userId)
            .then(data => {
                dispatch(setProfile(data));
            })
    }
}

export default profilePageReducer;