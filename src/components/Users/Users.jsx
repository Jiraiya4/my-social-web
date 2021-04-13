import * as axios from 'axios';
import s from './Users.module.css';
import React from 'react';
import userPhoto from '../../assets/images/userimg.jpg'
//import User from './User/User'

class Users extends React.Component{
    componentDidMount(){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.showMoreUsers(response.data.items);
        })
    }
    render(){
        return (
            <div>
            {
                this.props.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.avatar} />
                        </div>
                        <div>
                            { u.followed 
                                ? <button onClick={() => this.props.unfollowUser(u.id)}>Unfollow</button>
                                : <button onClick={() => this.props.followUser(u.id)}>Follow</button>
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
}

export default Users;