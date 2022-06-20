import React from 'react';
import { dialogsAddMessage, dialogsChangeMessageElement } from '../../redux/dialogsSlice';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {
    let dialogsElement = props.dialogsPage.dialogsData.map(elm =>
        <DialogItem name={elm.name} id={elm.id} ava={elm.ava} />);

    let mesegesElement = props.dialogsPage.messegesData.map(elm =>
        <Message text={elm.message} />);
    
    //let newMessageElement = React.createRef(); узнать про ref
    
    let changeDialogsElement = (e) => {
        //let text = newMessageElement.current.value; узнать про ref
        let text = e.target.value;
        props.dispatch(dialogsChangeMessageElement(text));
      }

    let addMessage = () => {
        props.dispatch(dialogsAddMessage());
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
                    <textarea placeholder='Enter your message' 
                        //ref={newMessageElement} узнать про ref
                        value={props.dialogsPage.textareaData} 
                        onChange={changeDialogsElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}> Add message</button>
                </div>
            </div>
        </div>

    );
}

export default Dialogs;