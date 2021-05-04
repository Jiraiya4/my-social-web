import React from 'react';
import { AddPostReduxForm } from '../../../forms/AddPostForm';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsItems = props.profilePage.posts.map(post => <Post key={post.id} message={post.message} likes={post.likes} />)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.postAdd}>
                <AddPostReduxForm onSubmit={onAddPost} />
            </div>
            <div className={s.posts}>
                {postsItems}
            </div>
        </div>
    );
}

export default MyPosts;