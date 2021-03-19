import s from "./Dialogs.module.css"
import { NavLink } from 'react-router-dom';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog id="1" name="Dima"></Dialog>
                <Dialog id="2" name="Juli"></Dialog>
                <Dialog id="3" name="Mark"></Dialog>
                <Dialog id="4" name="Vasilisa"></Dialog>
                <Dialog id="5" name="Olivia"></Dialog>
            </div>
            <div className={s.messages}>
                <Message text="Hello"></Message>
                <Message text="How are you?"></Message>
                <Message text="I love you"></Message>
            </div>
        </div>
    );
}

export default Dialogs;