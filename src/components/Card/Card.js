import { useEffect, useState } from 'react';
import React from 'react';
import './Card.css'
import Gun from '../Gun/Gun';

const Card = () => {    
  const [arms, setArms] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/mir-hussain/kopa-samsu-practice/main/public/data.json')
    .then(res => res.json())
    .then(data => setArms(data))
  }, [])
    return (
        <div className='card-container'>
            {
                arms.map(gun => <Gun gunData = {gun} key = {gun.id}></Gun>)
            }
        </div>
    );
};

export default Card;