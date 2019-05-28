import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CartItem from '../components/CartItem';
import * as cartAction from '../actions'

class Cart extends Component {
    
    renderItem(items) {
        return items.map(item => { 
            return (
                <CartItem  key={item.id} name={item.name} price={item.price}/>
            );
        });
    }

    render() {
        console.log(this.props.bag)
        return (
            <div className="cart">
                <span>Cart</span>
                <span>{this.props.bag.length}</span>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.bag.map(item => {
                            return (
                                <tr>
                                    <td><img src={item.image} /></td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        bag: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(cartAction, dispatch)
    };
}


export default connect(mapStateToProps)(Cart);