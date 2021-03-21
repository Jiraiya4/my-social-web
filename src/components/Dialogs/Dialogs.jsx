import s from "./Dialogs.module.css"
import { NavLink } from 'react-router-dom';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from 'react';

const Dialogs = (props) => {
    
    let dialogsItems = props.state.dialogs.map( dialog => <Dialog name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>) 
    let messagesItems = props.state.messages.map( message => <Message message={message.message} />)

    let textAreaRef = React.createRef();
    let writeMess = () => {
        let mess = textAreaRef.current.value;
        alert(mess);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={s.messages}>
                {messagesItems}
            </div>
            <textarea ref={textAreaRef}></textarea>
            <button onClick={writeMess}>Write</button>
        </div>
    );
}

export default Dialogs;