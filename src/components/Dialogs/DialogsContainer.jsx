import React from 'react';
import { dialogsAddMessage, dialogsChangeMessageElement } from '../../redux/dialogsSlice';
import Dialogs from './Dialogs';



const DialogsContainer = (props) => {
    let dialogsPage = props.store.getState().dialogsPage;

    let changeDialogsElement = (text) => {
        props.store.dispatch(dialogsChangeMessageElement(text));
    }

    let addMessage = () => {
        props.store.dispatch(dialogsAddMessage());
    }


    return <Dialogs dialogsPage={dialogsPage}
                    dialogsChangeMessageElement={changeDialogsElement}
                    dialogsAddMessage={addMessage} />
}

export default DialogsContainer;