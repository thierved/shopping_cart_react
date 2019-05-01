import React, {Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

import data from '../data.json'
import Item from "../components/Item.js";
import {addToChart} from '../actions'

class ProductList extends Component{
    render() {
        return (
            <div className="item-container">
                {data.map(item => {
                    return <Item name={item.name} id={item.id}
                    price={item.price} url={item.image} key={item.id}
                    contains={this.props.cart.indexOf(item) === -1}
                    handleClick={this.props.addToChart} />
                })}
            </div>
        );
    }    
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({addToChart}, dispatch);
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);