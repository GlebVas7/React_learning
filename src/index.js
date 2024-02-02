import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
    {id: 1, message: 'Hi, how are you?', like_count: 11},
    {id: 2, message: "It's my first post", like_count: 15},
    {id: 3, message: "blalal", like_count: 15},
    {id: 4, message: "dsada", like_count: 15}
]

let dialogsData = [
    {id: 1, name: 'Andrey'},
    {id: 2, name: 'Gleb'},
    {id: 3, name: 'Dima'},
    {id: 4, name: 'Leha'}
]

let messagesData = [
    {id: 1, mail: 'Hi'},
    {id: 2, mail: 'How are you?'},
    {id: 3, mail: 'Yo'},
    {id: 4, mail: 'Yo'}
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData = {postsData} dialogsData = {dialogsData} messagesData = {messagesData}/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
