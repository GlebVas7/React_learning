import './App.css';
import React from "react";
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/Profile/Profile";
import Dialogs from "./component/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./component/News/News";
import Music from "./component/Music/Music";
import Settings from "./component/Settings/Settings";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <div className="content_nav">
                    <Navbar/>
                    <div className="wrapper_content">
                        <Routes>
                            <Route path='/dialogs/*' element={<Dialogs dialogsData = {props.dialogsData} messagesData = {props.messagesData}/>}/>
                            <Route path='/profile' element={<Profile postsData = {props.postsData}/>}/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
