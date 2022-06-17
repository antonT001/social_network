import React from 'react';
import { addMessageActionCreator, changeDialogsElementActionCreator } from '../state';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {
    let dialogsElement = props.dialogsPage.dialogsData.map(elm =>
        <DialogItem name={elm.name} id={elm.id} ava={elm.ava} />);

    let mesegesElement = props.dialogsPage.messegesData.map(elm =>
        <Message text={elm.message} />);
    
    let newMessageElement = React.createRef();
    
    let changeDialogsElement = () => {
        let text = newMessageElement.current.value;
        props.dispatch(changeDialogsElementActionCreator(text));
      }

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
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
                    <textarea ref={newMessageElement} value={props.dialogsPage.textareaData} onChange={changeDialogsElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}> Add message</button>
                </div>
            </div>
        </div>

    );
}

export default Dialogs;