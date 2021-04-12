import {connect} from 'react-redux';
import {followUserAC, unfollowUserAC, showMoreUsersAC} from '../../redux/usersPageReducer';
import Users from './Users'

let mapStateToProps = state => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = dispatch => {
    return {
        followUser: (userId) => {
            dispatch(followUserAC(userId));
        },
        unfollowUser: (userId) => {
            dispatch(unfollowUserAC(userId))
        },
        showMoreUsers: (users) => {
            dispatch(showMoreUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;