import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";

let postsData = [
    {id: 1, message: 'Hi, how are you?', like_count: 11},
    {id: 2, message: "It's my first post", like_count: 15},
    {id: 3, message: "blalal", like_count: 15},
    {id: 4, message: "dsada", like_count: 15}
]
let postsElements = postsData
    .map(p => <Post message={p.message} like_count={p.like_count}/>);

const MyPosts = () => {
    return (
        <div className={c.content}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={c.posts}>
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts;