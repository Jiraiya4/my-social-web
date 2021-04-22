import {connect} from 'react-redux';
import {followUser, unfollowUser, selectPage, getUsers} from '../../redux/usersPageReducer';
import Users from './Users';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.selectPage, this.props.pageSize);
    }
    onSelectPage = (pageNumber) => {
        this.props.selectPage(pageNumber, this.props.pageSize);
    }
    onFollow = (userId) => {
        this.props.followUser(userId);
    }

    onUnFollow = (userId) => {
        this.props.unfollowUser(userId);
    }
    render() {
        return <>
                {this.props.isFatching ? <Preloader/> : <Users totalCount={this.props.totalCount}
                        pageSize={this.props.pageSize}
                        users={this.props.users}
                        selectedPage={this.props.selectedPage}
                        onSelectPage={this.onSelectPage}
                        onUnFollow={this.onUnFollow}
                        onFollow={this.onFollow}
                        followingInProgress={this.props.followingInProgress}
                />}               
                </>
    }
}

let mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        selectedPage: state.usersPage.selectedPage,
        isFatching: state.usersPage.isFatching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    followUser, unfollowUser, selectPage, getUsers
})(UsersContainer);