import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsItems = props.profilePage.posts.map( post => <Post key={post.id} message={post.message} likes={post.likes} />)

    let onChangePostText = (e) => {
        let text = e.target.value;
        props.changePostText(text)
    }
    
    let onAddPost = () => {
        props.addPost();
    }
    
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.postAdd}>
                <div>
                    <textarea onChange={onChangePostText} value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsItems}
            </div>
        </div>
    );
}

export default MyPosts;