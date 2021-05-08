import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import {connect} from 'react-redux';
import {getCaptchaUrl, userLogin} from '../../redux/authReducer';
import Login from './Login';
import { getIsAuth } from '../../redux/Selectors/profileSelector';
import { getIsCaptcha, getCaptchaURL } from '../../redux/Selectors/loginSelector';

class LoginContainer extends React.Component{
    componentDidMount(){
        
    }

    onSubmit = (formData) => {
        this.props.userLogin(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    render(){
        return (
            <Login {...this.props} onSubmit={this.onSubmit}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        captchaUrl: getCaptchaURL(state)
    }
}

export default compose (
    connect(mapStateToProps, {userLogin})
)(LoginContainer)