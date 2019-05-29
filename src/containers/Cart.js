import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CartItem from '../components/CartItem';
import * as cartAction from '../actions'

class Cart extends Component {
    
     render() {
        return (
            <div className="cart">
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.bag.map(item => {
                            return (
                                <tr>
                                    <td><img src={item.image} /></td>
                                    <td>{item.name}</td>
                                    <td>2</td>
                                    <td>${item.price}</td>
                                    <td><button>remove</button></td>
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