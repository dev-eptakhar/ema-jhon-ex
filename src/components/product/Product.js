
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, seller, price,stock} = props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-detail">
                <h4>{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button className="cart-btn" onClick={() => props.addHanddleProduct(props.product)}><FontAwesomeIcon icon={faCartPlus} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;