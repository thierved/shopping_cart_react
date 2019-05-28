import React from 'react';
import { NavLink } from 'react-router-dom'

import Cart from './Cart';

const Header = () => {
    return (
        <div className="header">
            <h1>Welcome to the shop!</h1>
            <NavLink to="/cart">Go to cart!</NavLink>
        </div>
    );
}

export default Header;