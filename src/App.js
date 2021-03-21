import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';
import Friends from './components/Friends/Friends';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.sideBarData}/>
        <div className="app-wrapper-content">
          <div>
            <Route path='/profile' render={ () => <Profile state={props.state.profilePage} addPost={props.addPost}/> } />
            <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage}/> } />
            <Route path='/news' render={ () => <News /> } />
            <Route path='/music' render={ () => <Music /> } />
            <Route path='/settings' render={ () => <Settings /> } />
            <Route path='/friends' render={ () => <Friends /> } />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;