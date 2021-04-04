import s from "./Dialogs.module.css"
import { NavLink } from 'react-router-dom';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from 'react';

const Dialogs = (props) => {
    
    let dialogsItems = props.dialogs.map( dialog => <Dialog name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>) 
    let messagesItems = props.messages.map( message => <Message message={message.message} />)

    let onUpdateNewMessageBody = (e) =>{
        let newMessageBody = e.target.value;
        props.updateNewMessageBody(newMessageBody)
    }

    let onSendMessage = () => {
        props.sendMessage();
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={s.messages}>
                {messagesItems}
            </div>
            <textarea onChange={onUpdateNewMessageBody} value={props.newMessageBody} placeholder='Enter your message'></textarea>
            <button onClick={onSendMessage}>Send</button>
        </div>
    );
}

export default Dialogs;