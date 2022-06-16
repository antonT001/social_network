import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElement = props.dialogsPage.dialogsData.map(elm =>
        <DialogItem name={elm.name} id={elm.id} ava={elm.ava} />);

    let mesegesElement = props.dialogsPage.messegesData.map(elm =>
        <Message text={elm.text} />);
    
    let newMessageElement = React.createRef();

    let AddMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
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
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={AddMessage}> Add post</button>
                </div>
            </div>
        </div>

    );
}

export default Dialogs;