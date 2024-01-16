import React from "react";
import c from './Profile.module.css';


const Profile = () => {
    return (
        <div className={c.content}>
            <img className={c.image_content}
                 src="https://ts11.tarafdari.com/contents/user787898/content-image/lake-landscape-mountain-mountains.jpeg"
                 alt=""/>
            <div>
                ava
            </div>
            <div className={c.posts}>
                post
                <div className={c.item}>
                    new post1
                </div>
                <div className={c.item}>
                    new post2
                </div>
            </div>
            <div>
                send post
            </div>
        </div>
    );
}
export default Profile;