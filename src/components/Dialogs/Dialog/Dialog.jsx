import s from './Dialog.module.css'
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {

    let path = `/dialogs/${props.id}`;
    
    return (
        <div className={s.dialog}>
            <img src={props.avatar} alt="" />
            <div>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default Dialog;