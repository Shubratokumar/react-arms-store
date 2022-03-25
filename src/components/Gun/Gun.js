import React from 'react';
import './Gun.css';
import {BsFillCartPlusFill} from 'react-icons/bs'

const Gun = ({gunData, handleAddToCart}) => {
    const {name, img, bullet, capacity, price, action} = gunData; 
    return (
        <div className='gun'>
            <div className='image-container'>
                <img src= {img} alt="" />
            </div>
            <div className='gun-info'>
                <h2>Arms Name : {name}</h2>
                <p>Bullet Type : {bullet}</p>
                <p>Capacity : {capacity}</p>
                <p>Action : {action}</p>
            </div>
            <div className='add-to-cart'>
                <button onClick={() => handleAddToCart(gunData)}>
                    <BsFillCartPlusFill className='icon'></BsFillCartPlusFill>
                </button>
                <h1>$ {price}</h1>
            </div>
        </div>
    );
};

export default Gun;