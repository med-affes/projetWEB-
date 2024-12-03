import React from 'react';
import './components.css';

const ArtisanSection: React.FC = () => {
  return (
    <div>
      <div className="artisan">
        <img src="/artisan.jpg" alt="art" className='background-image' />
        <div className="text-overlay">Artisan Products</div>
      </div>
    </div>
  );
};

export default ArtisanSection;