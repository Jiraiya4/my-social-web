import axios from 'axios';
import MyPosts from './MyPosts/MyPosts'
import Profile from './Profile';
import React from 'react';
import s from './Profile.module.css';
import { connect } from 'react-redux';
import {getProfile} from '../../redux/profilePageReducer';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/api';

class ProfileContainer extends React.Component{
    
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId) userId = 2;
        this.props.getProfile(userId);
    }

    render(){
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

let mapSateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect (mapSateToProps, {getProfile})(WithUrlDataContainerComponent);