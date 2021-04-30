import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import {connect} from 'react-redux';
import {userLogin} from '../../redux/authReducer';
import Login from './Login';

class LoginContainer extends React.Component{
    componentDidMount(){

    }

    render(){
        return (
            <Login {...this.props} userLogin={userLogin}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {

    }
}

export default compose (
    connect(mapStateToProps, {userLogin})
)(LoginContainer)