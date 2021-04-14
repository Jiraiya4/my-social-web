import s from './Users.module.css';
import React from 'react';
import userPhoto from '../../assets/images/userimg.jpg'
import { NavLink } from 'react-router-dom';
//import User from './User/User'

let Users = props => {
    let pagesCount = Math.ceil((props.totalCount - 11459) / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return <span className={props.selectedPage === p && s.selectedPage} onClick={() => { props.onSelectPage(p) }}>{p}</span>
                    })
                }
            </div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={`/profile/${u.id}`}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.avatar} />
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => props.unfollowUser(u.id)}>Unfollow</button>
                                    : <button onClick={() => props.followUser(u.id)}>Follow</button>
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                        </span>
                    </div>)
            }
        </div>
    );

}

export default Users;