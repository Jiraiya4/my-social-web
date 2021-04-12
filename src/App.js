import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar store={props.store} />
      <div className="app-wrapper-content">
        <div>
          <Route path='/profile' render={() => <Profile />} />
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/friends' render={() => <Friends />} />
        </div>
      </div>
    </div>
  );
}

export default App;