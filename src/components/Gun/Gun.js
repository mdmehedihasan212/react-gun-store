import React from 'react';
import './Gun.css';
import { FaCartPlus } from 'react-icons/fa';

const Gun = ({ gun }) => {
    const { img, name, bullet, capacity, action, price } = gun;
    console.log(gun);
    return (
        <div className="gun-container">
            <div className="img-container">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <p className="product-name">Name: {name}</p>
                <p>Bullet: {bullet}</p>
                <p>Capacity: {capacity}</p>
                <p>Action: {action}</p>
            </div>
            <div className="cart-btn">
                <button className="btn-icon">
                    <FaCartPlus></FaCartPlus>
                </button>
                <h4>Price: ${price} </h4>
            </div>
        </div>
    );
};

export default Gun;