import React from 'react';
import NavBar from './Components/NavBar';
import FashionSection from './Components/FashionSection';
import FoodSection from './Components/FoodSection';
import PainterSection from './Components/PainterSection';
import ArtisanSection from './Components/ArtisanSection';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Components/components.css'; // Import your custom CSS

const HomePage: React.FC = () => {
  return (
    <div className="home-page-container"> {/* Add a wrapper around the whole page */}
      <NavBar />
      <Carousel>
        <Carousel.Item>
          <FoodSection />
        </Carousel.Item>
        <Carousel.Item>
          <FashionSection />
        </Carousel.Item>
        <Carousel.Item>
          <PainterSection />
        </Carousel.Item>
        <Carousel.Item>
          <ArtisanSection />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomePage;
