import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            My posts
            <Post message="First post!" likes="11" />
            <Post message="Second post!" likes="22" />
            <Post message="Third post!" likes="33" />
        </div>
    );
}

export default MyPosts;