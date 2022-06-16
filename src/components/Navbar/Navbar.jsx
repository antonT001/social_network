import React from "react";
import App from "../../App";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'
import Sidebar from "./Sidebar/Sidebar";


const Navbar = (props) => {
  return <nav className={s.nav}>
    <div>
      <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
    </div>
    <div>
      <NavLink to="/dialogs" className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
    </div>
    <div>
      <NavLink to="/news" className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
    </div>
    <div>
      <NavLink to="music" className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
    </div>
    <div>
      <NavLink to="setting" className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
    </div>

    <div className={s.sidebar}>
      <Sidebar sidebar={props.sidebar} />

    </div>

  </nav>
}

export default Navbar;