import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";




const MyPosts = (props) => {
    let postsElements = props.state.postsData
        .map(p => <Post message={p.message} like_count={p.like_count}/>);

    let newPostElem = React.createRef();

    let addPost = () => {
        let text = newPostElem.current.value;
        props.addPost(text);
    }

    return (
        <div className={c.content}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElem}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={c.posts}>
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts;