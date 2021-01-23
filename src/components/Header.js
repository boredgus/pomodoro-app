import React from "react";
import { Link } from "react-router-dom";
import { initialUrl } from "../App";

function Header(props) {
    return (
        <header>
            <ul className="header">
                <li>
                    <Link to={`${initialUrl}/`} id="logo-link">
                        <img src="./logo.png" alt="tomato icon" />
                        <p className="title">TOMOTIMER</p>
                    </Link>
                </li>
                <li className="nav">
                    <Link to={`${initialUrl}/faq`}>FAQ</Link>
                    <Link to={`${initialUrl}/settings`}>Settings</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;