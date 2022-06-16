
import reportWebVitals from './reportWebVitals';
import store from './components/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
    root.render(
      <React.StrictMode>
        <App state={store.getState()} 
        addPost={store.addPost.bind(store)} changePostElement={store.changePostElement.bind(store)}
        addMessage={store.addMessage.bind(store)} changeMessageElement={store.changeMessageElement.bind(store)}/>
      </React.StrictMode>
    );
  }

rerenderEntireTree();

store._subscribe(rerenderEntireTree);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
