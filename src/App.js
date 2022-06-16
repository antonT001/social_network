import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar sidebar={props.state.sidebar}/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/*' 
              element={<Profile 
                profilePage={props.state.profilePage}
                addPost={props.addPost} changePostElement={props.changePostElement}/>} />
            <Route path='/dialogs/*' 
              element={<Dialogs dialogsPage={props.state.dialogsPage}
              addMessage={props.addMessage} changeMessageElement={props.changeMessageElement}/>} />
            <Route path='/news/*' 
              element={<News />} />
            <Route path='/music/*' 
              element={<Music />} />
            <Route path='/setting/*' 
              element={<Setting />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>);
}

export default App;
