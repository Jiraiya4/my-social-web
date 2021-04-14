import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { setAuthUserData} from '../../redux/authReducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then( response => {
            if (response.data.resultCode === 0){
                let {id, email, login} = response.data.data;
                this.props.setAuthUserData(email, login, id);
            }
        })
    }

    render(){
        return(
            < Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);