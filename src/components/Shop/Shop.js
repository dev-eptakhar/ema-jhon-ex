import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {
    const firstTen = fakeData.slice(0,10);
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState(firstTen);
    const addHanddleProduct = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className="shop-container">
            <div className="product-container">  
                {
                    products.map(product => <Product addHanddleProduct={addHanddleProduct} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;