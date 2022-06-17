import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElement = props.dialogsPage.dialogsData.map(elm =>
        <DialogItem name={elm.name} id={elm.id} ava={elm.ava} />);

    let mesegesElement = props.dialogsPage.messegesData.map(elm =>
        <Message text={elm.message} />);
    
    let newMessageElement = React.createRef();
    
    let changePostElement = () => {
        let text = newMessageElement.current.value;
        props.dispatch({type: 'CHANGE-MESSAGE-ELEMENT', text:text});
      }

    let addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'});
    }
    

    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                { dialogsElement }
            </div>
            <div>
                <div className={s.message}>
                    { mesegesElement }
                </div>
                <div>
                    <textarea ref={newMessageElement} value={props.dialogsPage.textareaData} onChange={changePostElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}> Add message</button>
                </div>
            </div>
        </div>

    );
}

export default Dialogs;