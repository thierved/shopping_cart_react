import React from "react";

import data from '../data.json'
import Item from "../components/Item.js";

const ProductList = () => {
    return (
        <div className="item-container">
            {data.map(item => {
                return <Item name={item.name} price={item.price} url={item.image} key={item.name} />
            })}
        </div>
    );
}

export default ProductList;