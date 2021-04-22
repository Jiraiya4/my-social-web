import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { userAuth } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { authAPI } from '../../api/api';

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

export default connect(mapStateToProps, { userAuth })(HeaderContainer);