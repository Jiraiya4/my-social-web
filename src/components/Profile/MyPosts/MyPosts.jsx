import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostCreator, updateNewPostTextCreator} from '../../../redux/profilePageReducer';

const MyPosts = (props) => {
    let postsItems = props.posts.map( post => <Post message={post.message} likes={post.likes} />)

    let updatePostText = (e) => {
        let text = e.target.value; 
        let action = updateNewPostTextCreator(text);
        props.dispatch(action);
    }

    let addPost = () => {
        props.dispatch(addPostCreator());
    }
    
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.postAdd}>
                <div>
                    <textarea onChange={updatePostText} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsItems}
            </div>
        </div>
    );
}

export default MyPosts;