import React from 'react';
import Header from './Header';
import { userAuth, userLogout } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

class HeaderContainer extends React.Component {
    onLogout = () => {
        this.props.userLogout();
    }

    render() {
        return (
            <Header {...this.props} onLogout={this.onLogout}/>
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
    connect(mapStateToProps, {userAuth, userLogout}),
    //withAuthRedirect
)(HeaderContainer)