const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SHOW_MORE_USERS = 'SHOW-MORE-USERS';
const SELETC_PAGE = 'SELETC_PAGE';
const ASSING_TOTAL_COUNT = 'ASSING_TOTAL_COUNT';

let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    selectedPage: 1
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
        case ASSING_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }
        default:
            return state;
    }
}

export const followUserAC = (userId) => ({ type: FOLLOW_USER, userId});
export const unfollowUserAC = (userId) => ({ type: UNFOLLOW_USER, userId});
export const showMoreUsersAC = (users) => ({ type: SHOW_MORE_USERS, users });
export const selectPageAC = (pageNumber) =>({ type: SELETC_PAGE, pageNumber })
export const assignTotalCountAC = (totalCount) => ({ type: ASSING_TOTAL_COUNT, totalCount })

export default usersPageReducer;