import React from 'react';
import './Header.css';
import { FaCartPlus } from 'react-icons/fa';


const Header = () => {
    return (
        <nav className="header-component">
            <h1>React Gun Store</h1>
            <div>
                <div className="cart">
                    <span>{ }</span>
                    <FaCartPlus className="icon"></FaCartPlus>
                </div>
            </div>
        </nav>
    );
};

export default Header;