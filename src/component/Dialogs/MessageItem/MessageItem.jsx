import React from 'react';
import s from './../Dialogs.module.css';

const MessageItem = (props) => {
    return (
        <div className={s.message}>{props.mail}</div>
    );
}


export default MessageItem;