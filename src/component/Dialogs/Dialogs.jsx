import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {


    let dialogsElements = props.state.dialogsData
        .map(d=> <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = props.state.messagesData
        .map(m =>  <MessageItem mail={m.mail}/>);

    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                {messagesElement}
                <div>
                    <textarea ref={newMessage}></textarea>
                </div>
                <div>
                    <a className={s.buttons} href='#' onClick={addMessage}>Send</a>
                </div>
            </div>
        </div>
    );
}


export default Dialogs;