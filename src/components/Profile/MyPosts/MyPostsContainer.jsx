import React from 'react';
import { connect } from 'react-redux';
import {addPost} from '../../../redux/profilePageReducer';
import { getProfilePage } from '../../../redux/Selectors/profileSelector';
import MyPosts from './MyPosts';

let mapStateToProps = state => {
    return {
        profilePage: getProfilePage(state)
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;