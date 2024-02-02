import React from "react";
import c from './ProfileInfo.module.css';



const ProfileInfo = () => {
    return (
        <div>
            <img className={c.image_content}
                 src="https://ts11.tarafdari.com/contents/user787898/content-image/lake-landscape-mountain-mountains.jpeg"
                 alt=""/>
            <div className={c.content}>
                ava
            </div>
        </div>
    );
}
export default ProfileInfo;