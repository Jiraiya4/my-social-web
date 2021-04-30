import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from "redux-form";

const MyPosts = (props) => {

    let postsItems = props.profilePage.posts.map(post => <Post key={post.id} message={post.message} likes={post.likes} />)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
        values.newPostText = '';
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

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newPostText" placeholder="Enter post text..." />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({ form: 'addPostForm' })(AddPostForm);

export default MyPosts;