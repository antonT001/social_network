import React from "react";
import s from './Sidebar.module.css'


const Sidebar = (props) => {
    // let sidebarElement = props.sidebar.map(elm =>
    //     <div>
    //         <img className='avaMini' src={elm.ava} />
    //         <div>{elm.name}</div>
    //     </div>
    // );

    return (
        <div className={s.sidebar}>
            <hr />
            <h3>Friends</h3>
            <div className={s.friend}>
                {/* {sidebarElement} */}
            </div>
        </div>
    )
}

export default Sidebar;