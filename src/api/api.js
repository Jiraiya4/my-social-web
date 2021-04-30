import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': '0c40b0db-c3ea-42a9-9caf-dc9b0eb5f633' }
})

export const userAPI = {
    getUsers(selectedPage = 1, pageSize = 10) {
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
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    }
}

export const profileAPI = {
    getProfileInfo(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            })
    },

    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateUserStatus(status) {
        return instance.put(`profile/status`, {status})
    }
}