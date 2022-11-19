import React, { useState } from 'react';

import './Navbar.css';

const Navbar = () => {
    const [active, setActive] = useState("nav_menu");
    const [toggleIcon, setToggleIcon] = useState("nav_toggler")
    const navToggle = () => {
        active === 'nav_menu' ? setActive('nav_menu nav_active') : setActive('nav_menu');

        // toggle animation
        toggleIcon === 'nav_toggler' ? setToggleIcon('nav_toggler toggle') : setToggleIcon('nav_toggler')
    }
    return (
        <nav className="nav">
            <a href="#" className="nav_brand">Sudipta</a>

            <ul className={active}>
                <li className="nav_item"><a href="#" className="nav_link">Home</a></li>
                <li className="nav_item"><a href="#" className="nav_link">About</a></li>
                <li className="nav_item"><a href="#" className="nav_link">Contuct</a></li>
                <li className="nav_item"><a href="#" className="nav_link">Blogs</a></li>
                <li className="nav_item"><a href="#" className="nav_link">More</a></li>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
};

export default Navbar;