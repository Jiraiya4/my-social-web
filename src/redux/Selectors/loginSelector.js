export const getIsAuth = (state) => {
    return state.auth.isAuth;
}

export const getIsCaptcha = (state) => {
    return state.auth.isCaptcha;
}

export const getCaptchaURL = (state) => {
    return state.auth.captchaUrl;
}