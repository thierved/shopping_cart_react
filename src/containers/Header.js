import React from 'react';

import Cart from './Cart';

const Header = () => {
    return (
        <div className="header">
            <h1>Welcome to the shop!</h1>
            <Cart />
        </div>
    );
}

export default Header;