import Dialogs from "./Dialogs";
import React from 'react';
import {sendMessage, updateNewMessageBody} from '../../redux/dialogsPageReducer';
import { connect } from "react-redux";

let mapStateToProps = state => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const DialogsContainer = connect(mapStateToProps, {
    sendMessage, updateNewMessageBody
})(Dialogs)

export default DialogsContainer;