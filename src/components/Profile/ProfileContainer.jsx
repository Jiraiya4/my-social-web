import Profile from './Profile';
import React from 'react';
import s from './Profile.module.css';
import { connect } from 'react-redux';
import {getProfile, getUserStatus, updateUserStatus} from '../../redux/profilePageReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/AuthRedirect';

class ProfileContainer extends React.Component{
    
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId) userId = 2;
        this.props.getProfile(userId);
        this.props.getUserStatus(userId);
    }

    render(){
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
            </div>
        );
    }
}

let mapSateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose (
    connect(mapSateToProps, {getProfile, getUserStatus, updateUserStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)