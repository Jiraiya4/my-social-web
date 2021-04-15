import s from './Users.module.css';
import React from 'react';
import userPhoto from '../../assets/images/userimg.jpg'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { userAPI } from '../../api/api';
//import User from './User/User'

let Users = props => {
    let pagesCount = Math.ceil((props.totalCount - 11459) / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let onFollow = (userId) => {
        userAPI.followUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    props.followUser(userId);
                }
            })
    }

    let onUnFollow = (userId) => {
        userAPI.unFollowUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    props.unfollowUser(userId);
                }
            })
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
                                    ? <button onClick={() => onUnFollow(u.id)}>Unfollow</button>
                                    : <button onClick={() => onFollow(u.id)}>Follow</button>
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