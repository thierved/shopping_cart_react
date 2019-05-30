import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {removeFromCart} from '../actions'

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
                                <tr key={item.id}>
                                    <td><img src={item.image} alt={item.name} /></td>
                                    <td>{item.name}</td>
                                    <td>2</td>
                                    <td>${item.price}</td>
                                    <td>
                                        <button
                                        onClick={() => this.props.removeFromCart(item.id)}>remove</button>
                                    </td>
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

const mapDispatchToProps = dispatch => {
    return bindActionCreators({removeFromCart}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             )(Cart);