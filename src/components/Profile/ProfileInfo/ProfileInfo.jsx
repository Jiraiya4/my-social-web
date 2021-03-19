import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src="https://www.teahub.io/photos/full/281-2818026_eur-rome.jpg" alt=""></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + descr
            </div>
        </div>
    );
}

export default ProfileInfo;