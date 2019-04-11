import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
    renderItem(items) {
        return items.map(item => { 
            return (
                <li><span>{item.name}</span><span>{item.price}</span></li>
            );
        });
    }

    render() {
        return (
            <div className="cart">
                <span>Cart</span>
                <span>{this.props.bag.length}</span>
                <div className="chart-items">
                    <ul>{this.renderItem(this.props.bag)}</ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        bag: state
    }
}

export default connect(mapStateToProps)(Cart);