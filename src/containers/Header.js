import React from 'react';
import { NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <div className="header">
            <h1>Welcome to the shop!</h1>
            <NavLink to="/cart" className="cart-btn">Go to cart!</NavLink>
        </div>
    );
}

export default Header;