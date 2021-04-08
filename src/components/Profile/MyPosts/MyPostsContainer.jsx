import React from 'react';
import { connect } from 'react-redux';
import {addPostCreator, updateNewPostTextCreator} from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';

let mapStateToProps = state => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = dispatch => {
    return {
        changePostText: (text) => {
            dispatch(updateNewPostTextCreator(text));
        },
        addPost: () => {
            dispatch(addPostCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;