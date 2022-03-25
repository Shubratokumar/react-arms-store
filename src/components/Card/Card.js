import { useEffect, useState } from 'react';
import React from 'react';
import './Card.css'
import Gun from '../Gun/Gun';

const Card = () => {    
  const [arms, setArms] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (arms) => {
    const newCart = [...cart, arms]
    // remember here arms is an object not an array
    setCart(newCart);
  }

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/mir-hussain/kopa-samsu-practice/main/public/data.json')
    .then(res => res.json())
    .then(data => setArms(data))
  }, [])
    return (
        <div>
            <div>
                {
                    cart && cart.map(item => <h2 key ={item.id}>{item.name}</h2>)
                }
            </div>
            <div className='card-container'>
                {
                    arms && arms.map(gun => <Gun gunData = {gun} key = {gun.id} handleAddToCart = {handleAddToCart}></Gun>)
                }
            </div>
        </div>
    );
};

export default Card;