import s from './User.module.css';

const User = (props) => {
    return(
        <div className={s.user}>
            <div className={s.avatar}>
                <img src={props.state.avatar} alt=""/>
                <button>Follow</button>
            </div>
            <div className={s.container}>
                <div>
                    {props.state.fullName}
                </div>
                <div>
                    {props.state.status}
                </div>
                <div>
                    {props.state.location.country}
                </div>
                <div>
                    {props.state.location.city}
                </div>
            </div>
        </div>
    )
}

export default User;