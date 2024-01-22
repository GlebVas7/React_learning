import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={c.posts}>
                <Post message = 'Hi, how are you?' like_count = "10"/>
                <Post message = "It's my first post" like_count = "15"/>
            </div>
        </div>
    );
}
export default MyPosts;