import {connect} from 'react-redux';
import {followUser, unfollowUser, showMoreUsers, selectPage, setTotalCount, toggleIsFatching} from '../../redux/usersPageReducer';
import Users from './Users';
import React from 'react';
import * as axios from 'axios';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFatching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFatching(false);
            this.props.showMoreUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        })
    }
    onSelectPage = (pageNumber) => {
        this.props.toggleIsFatching(true);
        this.props.selectPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFatching(false);
            this.props.showMoreUsers(response.data.items);
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