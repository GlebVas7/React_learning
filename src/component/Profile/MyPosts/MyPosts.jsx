import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";




const MyPosts = (props) => {
    let postsElements = props.postsData
        .map(p => <Post message={p.message} like_count={p.like_count}/>);
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