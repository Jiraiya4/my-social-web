import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://upload.wikimedia.org/wikipedia/en/8/8b/Avatar_2_logo.jpg" alt=""/>
            {props.message}
            <div>
                <span>{props.likes} 👍</span>
            </div>
            <button>like</button>
        </div>
    );
}

export default Post;