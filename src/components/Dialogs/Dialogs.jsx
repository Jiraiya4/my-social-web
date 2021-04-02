import s from "./Dialogs.module.css"
import { NavLink } from 'react-router-dom';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogsPageReducer';

const Dialogs = (props) => {
    
    let dialogsItems = props.state.dialogs.map( dialog => <Dialog name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>) 
    let messagesItems = props.state.messages.map( message => <Message message={message.message} />)

    let updateNewMessageBody = (e) =>{
        let newMessageBody = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(newMessageBody))
    }

    let sendMessage = () => {
        props.dispatch(sendMessageCreator());
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={s.messages}>
                {messagesItems}
            </div>
            <textarea onChange={updateNewMessageBody} value={props.state.newMessageBody} placeholder='Enter your message'></textarea>
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default Dialogs;