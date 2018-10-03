import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <div className="navbar">
        <ul>
            <li><NavLink exact={true} activeClassName="active" to="/">Home</NavLink></li>
            <li><NavLink exact={true} activeClassName="active" to="/about">About</NavLink></li>
            <li><NavLink exact={true} activeClassName="active" to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink exact={true} activeClassName="active" to="/contact">Contact</NavLink></li>
        </ul>
    </div>
);

export default Nav;
