import s from "./Dialogs.module.css"
import { NavLink } from 'react-router-dom';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name={props.dialogs[0].name} id={props.dialogs[0].id}></Dialog>
                <Dialog name={props.dialogs[1].name} id={props.dialogs[1].id}></Dialog>
                <Dialog name={props.dialogs[2].name} id={props.dialogs[2].id}></Dialog>
                <Dialog name={props.dialogs[3].name} id={props.dialogs[3].id}></Dialog>
                <Dialog name={props.dialogs[4].name} id={props.dialogs[4].id}></Dialog>
            </div>
            <div className={s.messages}>
                <Message message={props.messages[0].message}></Message>
                <Message message={props.messages[1].message}></Message>
                <Message message={props.messages[2].message}></Message>
            </div>
        </div>
    );
}

export default Dialogs;