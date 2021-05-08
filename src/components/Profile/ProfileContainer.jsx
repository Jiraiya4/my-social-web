import Profile from './Profile';
import React from 'react';
import s from './Profile.module.css';
import { connect } from 'react-redux';
import {requestProfile, requestUserstatus, updateUserStatus} from '../../redux/profilePageReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { getProfile, getStatus, getAuthoraizedUserId, getIsAuth } from '../../redux/Selectors/profileSelector';

class ProfileContainer extends React.Component{
    
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = this.props.authoraizedUserId;
            if(!userId){
                this.props.history.push('/login')
            }
        }
        this.props.requestProfile(userId);
        this.props.requestUserstatus(userId);
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
        profile: getProfile(state),
        status: getStatus(state),
        authoraizedUserId: getAuthoraizedUserId(state),
        isAuth: getIsAuth(state)
    }
}

export default compose (
    connect(mapSateToProps, {requestProfile, requestUserstatus, updateUserStatus}),
    withRouter
    //withAuthRedirect
)(ProfileContainer)