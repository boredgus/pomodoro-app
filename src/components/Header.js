import React from "react";
import {Link} from "react-router-dom"

function Header(props) {
    return (
        <header>
            <ul className="header">
                <li>
                    <img src="tomato_512.png" alt="tomato icon"/>
                    <p className="title">POMODORO TIMER</p>
                </li>
                <li className="nav">
                    <Link to="/">Timer</Link>
                    <Link to="/faq">FAQ</Link>
                    <Link to="/settings">Settings</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;