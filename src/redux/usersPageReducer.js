const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SHOW_MORE_USERS = 'SHOW-MORE-USERS';
const SELETC_PAGE = 'SELETC_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_ISFATCHING = 'TOGGLE_ISFATCHING';

let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    selectedPage: 1,
    isFatching: false
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
        default:
            return state;
    }
}

export const followUser = (userId) => ({ type: FOLLOW_USER, userId});
export const unfollowUser = (userId) => ({ type: UNFOLLOW_USER, userId});
export const showMoreUsers = (users) => ({ type: SHOW_MORE_USERS, users });
export const selectPage = (pageNumber) =>({ type: SELETC_PAGE, pageNumber });
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export const toggleIsFatching = (isFatching) => ({ type: TOGGLE_ISFATCHING, isFatching });

export default usersPageReducer;