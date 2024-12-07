import React from 'react';
import './components.css';

const PainterSection: React.FC = () => {
  return (
    <div>
      <div className="paint">
        <img src="/painters.jpg" alt="paints" className='background-image' />
        <div className="text-overlay">Paintings</div>
      </div>
    </div>
  );
};

export default PainterSection;