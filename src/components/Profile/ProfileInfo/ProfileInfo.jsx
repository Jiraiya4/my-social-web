import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    if(!props.profile) return <Preloader/>
    return (
        <div>
            <div>
                <img src="https://www.teahub.io/photos/full/281-2818026_eur-rome.jpg" alt=""></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                <div>
                    Full Name <span>{props.profile.fullName}</span>
                </div>
                <div>
                    About me <span>{props.profile.aboutMe}</span>
                </div>
                <div>
                    Contact <a href={`https://${props.profile.contacts.vk}`}>Мой VK</a>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;