import Dialogs from "./Dialogs";
import React from 'react';
import {sendMessage, updateNewMessageBody} from '../../redux/dialogsPageReducer';
import { connect } from "react-redux";
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/AuthRedirect';

let mapStateToProps = state => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage, updateNewMessageBody}),
    withAuthRedirect
)(Dialogs)