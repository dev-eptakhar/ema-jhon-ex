import React from 'react';
import './Cart.css';

const Cart = (props) => {
    let priceFormat = num => {
        let format = num.toFixed(2);
        return Number(format);
    }
    const cart = props.cart;
    const totalPrice = cart.reduce( (total, product) => total + product.price, 0 );
    //let total = 0;
    /* for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    } */
    let shipping = 0;
    if(totalPrice > 300 ){
        shipping = 50;
    }
    else if(totalPrice > 1000) {
        shipping = 100;
    }
    else if(totalPrice > 0 ){
        shipping = 25;
    }
    else if( totalPrice <= 10 ){
        shipping = 0;
    }
    let tax = totalPrice / 7; 
    return (
        <div>
            <h4>Order Summury</h4>
            <p>Items Ordered: {cart.length}</p>
            <p><small>Shipping Fee: {priceFormat(shipping)}</small></p>
            <p><small>Tax 7% : {priceFormat(tax)}</small></p>
            <p>Total Price: {priceFormat(totalPrice  + shipping + tax )}</p>
        </div>
    );
};

export default Cart;