import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': '20553f63-718f-43d0-a501-b4eb0b710aae' }
})

export const userAPI = {
    requestUsers(selectedPage = 1, pageSize = 10) {
        return instance.get(`users?page=${selectedPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    unFollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    },
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    },
    login(email, password, rememberMe, captcha) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout(){
        return instance.delete(`auth/login`)
    },
    getCaptchaUrl(){
        return instance.get(`security/get-captcha-url`)
    }
}

export const profileAPI = {
    requestProfileInfo(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            })
    },

    requestUserstatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateUserStatus(status) {
        return instance.put(`profile/status`, {status})
    }
}