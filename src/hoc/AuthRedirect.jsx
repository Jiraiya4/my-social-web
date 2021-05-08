import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getIsAuth } from '../redux/Selectors/hocSelector';

let mapStateToPropsForRedirect = (state) =>({
    isAuth: getIsAuth(state)
});

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component{
        render(){
            if (!this.props.isAuth) return <Redirect to='/login' />

            return <Component {...this.props} />
        }
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectedAuthRedirectComponent;
}