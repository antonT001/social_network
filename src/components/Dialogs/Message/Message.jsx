import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div>
            <p>{props.text}</p>
        </div>
    )
}


export default Message;