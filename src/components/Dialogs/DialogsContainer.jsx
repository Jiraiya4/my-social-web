import Dialogs from "./Dialogs";
import React from 'react';
import {sendMessage} from '../../redux/dialogsPageReducer';
import { connect } from "react-redux";
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/AuthRedirect';

let mapStateToProps = state => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Dialogs)