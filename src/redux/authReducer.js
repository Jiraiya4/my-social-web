import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

let initialState = {
    //look doc. of API
    login: null,
    email: null,
    userId: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

const setAuthUserData = (email, login, userId, isAuth) => ({ type: SET_USER_DATA, payload: { email, login, userId, isAuth } });
const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, payload: {captchaUrl}})

export const userAuth = () => (dispatch) => {
    authAPI.authMe()
    .then(data => {
        if (data.resultCode === 0) {
            let { id, email, login } = data.data;
            dispatch(setAuthUserData(email, login, id, true));
        }
    })
    
}

export const userLogin = (email, password, rememberMe, captcha) => (dispatch) => {
    authAPI.login(email, password, rememberMe, captcha)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(userAuth())
            } else {
                if(response.data.resultCode === 10) {
                    dispatch(getCaptchaUrl())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
                    dispatch(stopSubmit('login', {_error: message}))
                }
            }
        })
}

export const userLogout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
}

export const getCaptchaUrl = () => (dispatch) => {
    authAPI.getCaptchaUrl()
        .then(response => {
            dispatch(setCaptchaUrl(response.data.url));
        })
}

export default authReducer;