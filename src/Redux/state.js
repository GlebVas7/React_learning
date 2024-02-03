import {rerenderEntireTree} from "../render";

let state = {
    profilePage:{
        postsData: [
            {id: 1, message: 'Hi, how are you?', like_count: 11},
            {id: 2, message: "It's my first post", like_count: 15},
            {id: 3, message: "blalal", like_count: 15},
            {id: 4, message: "dsada", like_count: 15}]
    },
    dialogPage: {
        dialogsData: [
            {id: 1, name: 'Andrey'},
            {id: 2, name: 'Gleb'},
            {id: 3, name: 'Dima'},
            {id: 4, name: 'Leha'}],
        messagesData: [
            {id: 1, mail: 'Hi'},
            {id: 2, mail: 'How are you?'},
            {id: 3, mail: 'Yo'},
            {id: 4, mail: 'Yo'}
        ]
    },

}

 export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        like_count: 0
    }
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
}

export default state;