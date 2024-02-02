import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {


    let dialogsElements = props.dialogsData
        .map(d=> <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = props.messagesData
        .map(m =>  <MessageItem mail={m.mail}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    );
}


export default Dialogs;