import React from 'react';
import Header from './Header';
import { userAuth, userLogout } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';
import { getIsAuth, getLogin } from '../../redux/Selectors/headerSelector';

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
        isAuth: getIsAuth(state),
        login: getLogin(state)
        //auth: state.auth
    }
}

export default compose (
    connect(mapStateToProps, {userAuth, userLogout}),
    //withAuthRedirect
)(HeaderContainer)