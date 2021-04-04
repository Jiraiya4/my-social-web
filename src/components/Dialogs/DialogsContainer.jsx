import Dialogs from "./Dialogs";
import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogsPageReducer';

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let updateNewMessageBody = (newMessageBody) =>{
        props.store.dispatch(updateNewMessageBodyCreator(newMessageBody))
    }

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    return (
        <div>
            <Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} 
            newMessageBody={state.dialogsPage.newMessageBody} updateNewMessageBody={updateNewMessageBody} sendMessage={sendMessage}/>
        </div>
    );
}

export default DialogsContainer;