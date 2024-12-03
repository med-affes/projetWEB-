import React from 'react';
import './components.css';

const FashionSection: React.FC = () => {
  return (
    <div>
      <div className="fashion">
        <img src="/fashion.jpg" alt="Sweater" className='background-image' />
        <div className="text-overlay">Fashion</div>
      </div>
    </div>
  );
};

export default FashionSection;

