import React from "react";
import h from './Header.module.css';

const Header = () => {
    return (
        <header className={h.header}>
            <img src="https://styleall.ru/wp-content/uploads/2023/02/4eebee67599783.y3jvccwymzyxlde4ndcsntcyldmxnq.jpg"
                 alt="" className={h.image}/>
        </header>
    );
}
export default Header;