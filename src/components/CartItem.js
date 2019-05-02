import React from 'react';

const CartItem = (props) => {
    return (
        <li><span>{props.name}</span><span>{props.price}</span></li>
    );
}

export default CartItem;