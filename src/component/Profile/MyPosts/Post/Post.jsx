import React from "react";
import c from './Post.module.css';


const Post = (props) => {
    return (
        <div className={c.item}>
            <img src="https://w7.pngwing.com/pngs/364/361/png-transparent-account-avatar-profile-user-avatars-icon.png" alt=""/>
            {props.message}
            <div>
                <span>{props.like_count}</span>
            </div>
        </div>
    );
}
export default Post;