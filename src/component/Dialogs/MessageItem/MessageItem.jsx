import React from 'react';
import s from './../Dialogs.module.css';

const MessageItem = (props) => {


    return (
        <div>
            <div className={s.message}>{props.mail}</div>
        </div>
    );
}


export default MessageItem;