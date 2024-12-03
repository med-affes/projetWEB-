import React from 'react';
import './components.css';

const FoodSection: React.FC = () => {
  return (
    <div>
      <div className="food">
        <img src="/food.jpg" alt="pizza" className='background-image' />
        <div className="text-overlay">Food</div>
      </div>
    </div>
  );
};

export default FoodSection;