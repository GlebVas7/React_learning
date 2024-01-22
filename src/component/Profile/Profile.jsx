import React from "react";
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div>
            <img className={c.image_content}
                 src="https://ts11.tarafdari.com/contents/user787898/content-image/lake-landscape-mountain-mountains.jpeg"
                 alt=""/>
            <div>
                ava
            </div>
            <MyPosts />
        </div>
    );
}
export default Profile;