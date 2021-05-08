import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Route, withRouter } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import { userAuth } from './redux/authReducer';
import { compose } from 'redux';

class App extends React.Component {

  componentDidMount() {
    this.props.userAuth();
  }

  render() {
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar store={this.props.store} />
        <div className="app-wrapper-content">
          <div>
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/friends' render={() => <Friends />} />
            <Route path='/login' render={() => <LoginContainer />} />
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  withRouter,
  connect(null, {userAuth})
)(App)