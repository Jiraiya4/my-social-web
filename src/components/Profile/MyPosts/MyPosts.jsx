import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
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
                <Post message="First post!" likes="11" />
                <Post message="Second post!" likes="22" />
                <Post message="Third post!" likes="33" />
            </div>
        </div>
    );
}

export default MyPosts;