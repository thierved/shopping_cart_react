import React, { Component } from 'react';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsCount : 1
        }
    }

    render() {
        return (
            <div className="cart">
                <span>Cart</span>
                <span>{this.state.itemsCount}</span>
            </div>
        );
    }
}

export default Cart;