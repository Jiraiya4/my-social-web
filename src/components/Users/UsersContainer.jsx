import {connect} from 'react-redux';
import {followUser, unfollowUser, selectPage, requestUsers} from '../../redux/usersPageReducer';
import Users from './Users';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { getFollowingInProgress, getIsFatching, getPageSize, getSelectedPage, getTotalCount, getUsers } from '../../redux/Selectors/usersSelector';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.selectPage, this.props.pageSize);
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        selectedPage: getSelectedPage(state),
        isFatching: getIsFatching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {followUser, unfollowUser, selectPage, requestUsers}),
    //withAuthRedirect
)(UsersContainer)