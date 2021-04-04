import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let changePostText = (text) => {
        let action = updateNewPostTextCreator(text);
        props.store.dispatch(action);
    }

    let addPost = () => {
        props.store.dispatch(addPostCreator());
    }
    
    return (
        <div>
            <MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} addPost={addPost} changePostText={changePostText}/>
        </div>
    )
}

export default MyPostsContainer;