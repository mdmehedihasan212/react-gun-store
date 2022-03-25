import React from 'react';
import './Gun.css';
import { FaCartPlus } from 'react-icons/fa';

const Gun = ({ gun }) => {
    const { img, name, bullet, capacity, action, price } = gun;
    // console.log(gun);
    return (
        <div className="gun-container">
            <div className="img-container">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h1>Name: {name}</h1>
                <p>Bullet: {bullet}</p>
                <p>Capacity: {capacity}</p>
                <p>Action: {action}</p>
            </div>
            <div className="cart-btn">
                <button>
                    <FaCartPlus></FaCartPlus>
                </button>
                <h1> $ {price} </h1>
            </div>
        </div>
    );
};

export default Gun;