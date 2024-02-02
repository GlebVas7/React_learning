import React from "react";
import h from './Header.module.css';

const Header = () => {
    return (
        <header className={h.header}>
            <img src="https://catherineasquithgallery.com/uploads/posts/2021-03/1614571788_26-p-krasivie-nadpisi-na-belom-fone-26.png"
                 alt="" className={h.image}/>
        </header>
    );
}
export default Header;