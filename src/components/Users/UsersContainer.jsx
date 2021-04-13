import {connect} from 'react-redux';
import {followUserAC, unfollowUserAC, showMoreUsersAC, selectPageAC, assignTotalCountAC} from '../../redux/usersPageReducer';
import Users from './Users';
import React from 'react';
import * as axios from 'axios';

let mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        selectedPage: state.usersPage.selectedPage
    }
}

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.pageSize}`).then(response => {
            this.props.showMoreUsers(response.data.items);
            this.props.assignTotalCount(response.data.totalCount);
        })
    }
    onSelectPage = (pageNumber) => {
        this.props.selectPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.showMoreUsers(response.data.items);
        })
    }
    render() {
        return <Users totalCount={this.props.totalCount}
                        pageSize={this.props.pageSize}
                        users={this.props.users}
                        selectedPage={this.props.selectedPage}
                        onSelectPage={this.onSelectPage}
                        unfollowUser={this.props.unfollowUser}
                        followUser={this.props.followUser}

        />
    }
}

let mapDispatchToProps = dispatch => {
    return {
        followUser: (userId) => {
            dispatch(followUserAC(userId));
        },
        unfollowUser: (userId) => {
            dispatch(unfollowUserAC(userId));
        },
        showMoreUsers: (users) => {
            dispatch(showMoreUsersAC(users));
        },
        selectPage: (pageNumber) => {
            dispatch(selectPageAC(pageNumber));
        },
        assignTotalCount: (totalCount) =>{
            dispatch(assignTotalCountAC(totalCount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);