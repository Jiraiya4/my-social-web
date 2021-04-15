import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { setAuthUserData } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { authAPI } from '../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data;
                    this.props.setAuthUserData(email, login, id);
                }
            })
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

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);