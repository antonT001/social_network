import { connect } from 'react-redux';
import { dialogsAddMessage, dialogsChangeMessageElement } from '../../redux/dialogsSlice';
import Dialogs from './Dialogs';

const mapStateToProps = (state) =>{
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dialogsChangeMessageElement: (text) => {
            dispatch(dialogsChangeMessageElement(text))
        },
        dialogsAddMessage: () => {
            dispatch(dialogsAddMessage())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;