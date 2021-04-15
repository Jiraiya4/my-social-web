import {connect} from 'react-redux';
import {followUser, unfollowUser, showMoreUsers, selectPage, setTotalCount, toggleIsFatching} from '../../redux/usersPageReducer';
import Users from './Users';
import React from 'react';
import * as axios from 'axios';
import Preloader from '../common/Preloader/Preloader';
import { userAPI } from '../../api/api';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFatching(true);
        userAPI.getUsers(this.props.selectedPage, this.props.pageSize)
        .then(data => {
            this.props.toggleIsFatching(false);
            this.props.showMoreUsers(data.items);
            this.props.setTotalCount(data.totalCount);
        })
    }
    onSelectPage = (pageNumber) => {
        this.props.toggleIsFatching(true);
        this.props.selectPage(pageNumber);
        userAPI.getUsers(pageNumber, this.props.pageSize)
        .then(data => {
            this.props.toggleIsFatching(false);
            this.props.showMoreUsers(data.items);
        })
    }
    render() {
        return <>
                {this.props.isFatching ? <Preloader/> : <Users totalCount={this.props.totalCount}
                        pageSize={this.props.pageSize}
                        users={this.props.users}
                        selectedPage={this.props.selectedPage}
                        onSelectPage={this.onSelectPage}
                        unfollowUser={this.props.unfollowUser}
                        followUser={this.props.followUser}
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
        isFatching: state.usersPage.isFatching
    }
}

export default connect(mapStateToProps, {
    followUser, unfollowUser, showMoreUsers, selectPage, setTotalCount, toggleIsFatching
})(UsersContainer);