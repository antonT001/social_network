import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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

export default rerenderEntireTree;