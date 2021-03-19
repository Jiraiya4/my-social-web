import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.postAdd}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={props.posts[0].message} likes={props.posts[0].likes} />
                <Post message={props.posts[1].message} likes={props.posts[1].likes} />
                <Post message={props.posts[2].message} likes={props.posts[2].likes} />
            </div>
        </div>
    );
}

export default MyPosts;