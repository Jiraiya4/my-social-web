import s from './sideBarItem.module.css';
import {NavLink} from 'react-router-dom';

const sideBarItem = (props) => {
    
    let path = `/dialogs/${props.id}`;

    return (
        <div className={s.item}>
            <img src={props.avatar} alt="" />
            <div>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default sideBarItem;