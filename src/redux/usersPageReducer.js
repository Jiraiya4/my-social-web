import { userAPI } from "../api/api";

const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SHOW_MORE_USERS = 'SHOW-MORE-USERS';
const SELETC_PAGE = 'SELETC_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_ISFATCHING = 'TOGGLE_ISFATCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    selectedPage: 1,
    isFatching: false,
    followingInProgress: []
}

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER: 
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW_USER: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        }
        case SHOW_MORE_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SELETC_PAGE: {
            return {
                ...state,
                selectedPage: action.pageNumber
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }
        case TOGGLE_ISFATCHING: {
            return {
                ...state,
                isFatching: action.isFatching
            }
        }
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state, 
                followingInProgress: action.isFatching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const followUserSuccess = (userId) => ({ type: FOLLOW_USER, userId});
export const unfollowUserSuccess = (userId) => ({ type: UNFOLLOW_USER, userId});
export const showMoreUsers = (users) => ({ type: SHOW_MORE_USERS, users });
export const setCurrentPage = (pageNumber) =>({ type: SELETC_PAGE, pageNumber });
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export const toggleIsFatching = (isFatching) => ({ type: TOGGLE_ISFATCHING, isFatching });
export const toggleFollowingInProgress = (isFatching, userId) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isFatching, userId});

export const requestUsers = () => {
    return (dispatch) => {
        dispatch(toggleIsFatching(true));
        userAPI.requestUsers()
        .then(data => {
            dispatch(toggleIsFatching(false));
            dispatch(showMoreUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
        })
    }
}

export const selectPage = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFatching(true));
        dispatch(setCurrentPage(pageNumber));
        userAPI.requestUsers(pageNumber, pageSize)
        .then(data => {
            dispatch(toggleIsFatching(false));
            dispatch(showMoreUsers(data.items));
        })
    }
}

export const followUser = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId));
        userAPI.followUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followUserSuccess(userId));
                    dispatch(toggleFollowingInProgress(false, userId));
                }
            })
    }
}

export const unfollowUser = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId));
        userAPI.unFollowUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowUserSuccess(userId));
                    dispatch(toggleFollowingInProgress(false, userId)); 
                }
            })
    }
}

export default usersPageReducer;