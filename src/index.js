
import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './components/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, changePostElement, addMessage, changeMessageElement} from './components/state.js'


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    
    root.render(
      <React.StrictMode>
        <App state={state} 
        addPost={addPost} changePostElement={changePostElement}
        addMessage={addMessage} changeMessageElement={changeMessageElement}/>
      </React.StrictMode>
    );
  }

rerenderEntireTree(state);

subscribe(rerenderEntireTree);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
