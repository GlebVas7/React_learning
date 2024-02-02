import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={`${s.item} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}
const Message = (props) => {
    return (
        <div className={s.message}>{props.mail}</div>
    );
}
const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Gleb'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Leha'}
    ]

    let messagesData = [
        {id: 1, mail: 'Hi'},
        {id: 2, mail: 'How are you?'},
        {id: 3, mail: 'Yo'},
        {id: 4, mail: 'Yo'}
    ]

    let dialogsElements = dialogsData
        .map(d=> <Dialog name={d.name} id={d.id}/>);
    let messagesElement = messagesData
        .map(m =>  <Message mail={m.mail}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {
                    dialogsElements
                }
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    );
}


export default Dialogs;