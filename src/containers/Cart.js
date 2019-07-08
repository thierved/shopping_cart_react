import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

import {removeFromCart} from '../actions'

class Cart extends Component {
    
    renderTable() {
        return (
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
        );
    }

    computeTotal(items){
        let total = 0;

        items.map(element => {
            total += element["price"];
        });
        return total;
    }

    render() {
         console.log()
        return (
            <div className="cart">
                <div className='shopping-info'>
                    <ul>
                        <li>Quantity: <span>{this.props.bag.length}</span></li>
                        <li>Cost: <span>{this.computeTotal(this.props.bag)}</span></li>
                    </ul>
                </div>
                {(!this.props.bag[0]) ? <h3>Your bag is empty!</h3> : this.renderTable()} 
                <button className="btn">
                    <NavLink to="/" className="btn-link">Go Back!</NavLink>
                </button>
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