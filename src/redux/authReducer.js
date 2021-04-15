const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    //look doc. of API
    login: null,
    email: null,
    userId: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (email, login, userId) => ({ type: SET_USER_DATA, data: {email, login, userId}});

export default authReducer;