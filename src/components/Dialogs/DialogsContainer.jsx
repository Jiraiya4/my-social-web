import Dialogs from "./Dialogs";
import React from 'react';
import {sendMessage} from '../../redux/dialogsPageReducer';
import { connect } from "react-redux";
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { getDialogsPage } from "../../redux/Selectors/dialogsSelector";

let mapStateToProps = state => {
    return {
        dialogsPage: getDialogsPage(state)
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Dialogs)