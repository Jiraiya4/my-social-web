import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    posts: [
        { id: 1, message: 'First post!', likes: 11 },
        { id: 2, message: 'Second post!', likes: 22 },
        { id: 3, message: 'Third post!', likes: 33 }
    ],
    profile: null,
    status: ''
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: action.newPostText,
                likes: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const setProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });

export const requestProfile = (userId) => {
    return (dispatch) => {
        profileAPI.requestProfileInfo(userId)
            .then(data => {
                dispatch(setProfile(data));
            })
    }
}

export const requestUserstatus = (userId) => (dispatch) => {
    profileAPI.requestUserstatus(userId)
        .then(status =>
            dispatch(setUserStatus(status.data)))
}

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateUserStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}

export default profilePageReducer;