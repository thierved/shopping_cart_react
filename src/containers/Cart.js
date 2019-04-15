import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disable: false
        }
    }
    renderItem(items) {
        return items.map(item => { 
            return (
                <li key={item.id}><span>{item.name}</span><span>{item.price}</span></li>
            );
        });
    }

    render() {
        return (
            <div className="cart" onClick={() => this.setState({ disable: !this.state.disable })}>
                <span>Cart</span>
                <span>{this.props.bag.length}</span>
                <div className={this.state.disable ? "chart-items" : "chart-items disable"}>
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