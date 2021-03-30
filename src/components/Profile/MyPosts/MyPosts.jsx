import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let postsItems = props.posts.map( post => <Post message={post.message} likes={post.likes} />)

    let textAreaRef = React.createRef();

    let updatePostText = () => {
        let newPostText = textAreaRef.current.value; 
        props.changePostText(newPostText);
    }

    let addPost = () => {
        props.addPost();
    }
    
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.postAdd}>
                <div>
                    <textarea ref={textAreaRef} onChange={updatePostText} value={props.newPostText}/>
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