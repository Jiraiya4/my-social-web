import Dialogs from "./Dialogs";
import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogsPageReducer';
import { connect } from "react-redux";

let mapStateToProps = state => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = dispatch => {
    return {
        updateNewMessageBody: (text) =>{
            dispatch(updateNewMessageBodyCreator(text))
        },
        sendMessage: () =>{
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;