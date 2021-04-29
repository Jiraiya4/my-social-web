import React from 'react';
import Header from './Header';
import { userAuth } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/AuthRedirect';
import { compose } from 'redux';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.userAuth();
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
        //auth: state.auth
    }
}

export default compose (
    connect(mapStateToProps, {userAuth}),
    //withAuthRedirect
)(HeaderContainer)