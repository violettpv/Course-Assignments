import React from 'react';
import { FunkoPOPs } from './CardsData';
import './GoodsCards.css';

const GoodCards = () => {
  return (
    <div className='pop_block'> 
      {FunkoPOPs.map(figure => <FunkoCard info={figure} key={figure.name} />)} 
    </div>
  );
};

const FunkoCard = ({ info }) => {
  const { img, name, cost, number } = info;
  return (
    <div className='pop_card'>
      <img className='pop_img' src={img} alt='pop_img' />
      <p>Назва: {name}</p>
      <p>Ціна: {cost}</p>
      <p>Номер в серії: № {number}</p>
    </div>
  );
};

export default GoodCards;
