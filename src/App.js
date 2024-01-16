import './App.css';
import React from "react";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Profile from "./component/Profile";


const App = () =>  {
  return (
    <div className="wrapper">
        <Header />
        <Navbar />
        <Profile />
    </div>
  );
}


export default App;
