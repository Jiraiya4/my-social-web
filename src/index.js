import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  {id: 1, name: 'Dima'},
  {id: 2, name: 'Juli'},
  {id: 3, name: 'Mark'},
  {id: 4, name: 'Vasilisa'},
  {id: 5, name: 'Olivia'}
]

let messagesData = [
  {id: 1, message: 'Hello'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'I love you'},
]

let postsData = [
    {id: 1, message: 'First post!', likes: 11},
    {id: 2, message: 'Second post!', likes: 22},
    {id: 3, message: 'Third post!', likes: 33}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogsData} messages={messagesData} posts={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
