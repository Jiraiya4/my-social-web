import s from "./Dialogs.module.css"
import { NavLink } from 'react-router-dom';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from 'react';
import { Field, reduxForm } from "redux-form";

const Dialogs = (props) => {
    
    let dialogsItems = props.dialogsPage.dialogs.map(dialog => <Dialog key={dialog.id} name={dialog.name} id={dialog.id} avatar={dialog.avatar} />)
    let messagesItems = props.dialogsPage.messages.map(message => <Message key={message.id} message={message.message} />)
    
    let onSendMessage = (values) => {
        props.sendMessage(values.newMessageBody);
        values.newMessageBody = '';
    }
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={s.messages}>
                {messagesItems}
            </div>
            <AddMessageReduxForm onSubmit={onSendMessage} />
        </div>
    );
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({ form: 'addMessage' })(AddMessageForm);

export default Dialogs;