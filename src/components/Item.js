import React from 'react';

const Item = (props) => {
    return (
        <a href="#" className='item'>
            <span className="popup">Click to add to Cart</span>
            <img src={props.url} alt={props.url}/>
            <div className='detail'>
                <span className='price'>{props.price}</span>
                <span className='name'>{props.name}</span>
            </div>
        </a>
    );
}

export default Item;