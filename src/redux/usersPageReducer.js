const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SHOW_MORE_USERS = 'SHOW-MORE-USERS';

let initialState = {
    users: []
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
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}

export const followUserAC = (userId) => ({ type: FOLLOW_USER, userId});
export const unfollowUserAC = (userId) => ({ type: UNFOLLOW_USER, userId});
export const showMoreUsersAC = (users) => ({ type: SHOW_MORE_USERS, users });

export default usersPageReducer;