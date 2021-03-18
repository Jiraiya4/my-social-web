import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://www.teahub.io/photos/full/281-2818026_eur-rome.jpg" alt=""></img>
            </div>
            <div className={s.item}>
                ava + descr
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;