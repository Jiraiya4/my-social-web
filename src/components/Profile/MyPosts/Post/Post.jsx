import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://upload.wikimedia.org/wikipedia/en/8/8b/Avatar_2_logo.jpg" alt=""/>
            some text
            <button>like</button>
        </div>
    );
}

export default Post;