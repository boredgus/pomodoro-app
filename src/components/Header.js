import React from "react";
import { Link } from "react-router-dom";
import { initialUrl } from "../App";

function Header(props) {
    return (
        <header>
            <ul className="header">
                <li>
                    <Link to={`${initialUrl}/`} id="logo-link">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/135/135702.svg" alt="tomato icon" />
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