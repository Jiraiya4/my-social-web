import s from './Users.module.css';
//import User from './User/User'

const Users = (props) => {

    if(props.users.length === 0){
        props.showMoreUsers([
            {
                id: 1, followed: true,fullName: 'Dmytro P.', avatar: 'https://www.fivesquid.com/pics/t2/1552234583-109021-1-1.jpg',
                status: 'Hello, im the best!', location: { country: 'Poland', city: 'Warsaw' }
            },
            {
                id: 2, followed: false,fullName: 'Vlad S.', avatar: 'https://www.fivesquid.com/pics/t2/1552234583-109021-1-1.jpg',
                status: 'Hello, im good!', location: { country: 'Ukraine', city: 'Mykolauv' }
            },
            {
                id: 3, followed: true,fullName: 'Sanya Z.', avatar: 'https://www.fivesquid.com/pics/t2/1552234583-109021-1-1.jpg',
                status: 'Hello, im insta-blogger!', location: { country: 'Ukraine', city: 'Kyiv' }
            },
            {
                id: 4, followed: false,fullName: 'Misha M.', avatar: 'https://www.fivesquid.com/pics/t2/1552234583-109021-1-1.jpg',
                status: 'Hello, im sailor!', location: { country: 'Africa', city: 'Managa' }
            }
        ])
    }

    return(
        <div>
            {
                props.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.avatar} className={s.avatar} />
                        </div>
                        <div>
                            { u.followed 
                                ? <button onClick={() => props.unfollowUser(u.id)}>Unfollow</button>
                                : <button onClick={() => props.followUser(u.id)}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;