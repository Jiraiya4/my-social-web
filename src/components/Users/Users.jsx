import s from './Users.module.css';
import React from 'react';
import userPhoto from '../../assets/images/userimg.jpg'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
//import User from './User/User'

let Users = props => {
    let pagesCount = Math.ceil((props.totalCount - 11459) / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let onFollow = (userId) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {} , {
            withCredentials: true, headers: {'API-KEY' : '0c40b0db-c3ea-42a9-9caf-dc9b0eb5f633'}
        }).then( response => {
            if(response.data.resultCode === 0){
                props.followUser(userId);
            }
        })
    }

    let onUnFollow = (userId) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
            withCredentials: true, headers: {'API-KEY' : '0c40b0db-c3ea-42a9-9caf-dc9b0eb5f633'}
        }).then( response => {
            if(response.data.resultCode === 0){
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