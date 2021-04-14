import React from 'react';
import { connect } from 'react-redux';
import {addPost, updateNewPostText} from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';

let mapStateToProps = state => {
    return {
        profilePage: state.profilePage
    }
}

const MyPostsContainer = connect(mapStateToProps, {
    addPost, updateNewPostText
})(MyPosts);

export default MyPostsContainer;