import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./Components/NavBar";
import "./Search.css";

const Search: React.FC = () => {
  const navigate = useNavigate();
  const categories = [
    { name: "Spaghetti", image: "/pasta.jpg", rating: 4 },
    { name: "Donut", image: "/donuts.jpg", rating: 3 },
    { name: "Pizza", image: "/pizza.jpg", rating: 5 },
    { name: "Lemon juice", image: "/lemon.jpg", rating: 4 },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
        ★
      </span>
    ));
  };

  const handleCategoriesClick = () => {
    navigate("/home"); // Navigate to HomePage
  };

  const handleProductClick = () => {
    navigate("/ProductView"); // Navigate to the ProductView page
  };

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <NavBar />
      </header>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button onClick={handleCategoriesClick}>Categories</button>
        <button>New in Site</button>
        <button>Wow Price</button>
        <button>Recommendations</button>
      </div>

      {/* Categories Grid */}
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-card"
            onClick={handleProductClick}
          >
            <img
              src={category.image}
              alt={category.name}
              className="category-image large"
            />
            <p className="category-name">{category.name}</p>
            <div className="category-rating">
              {renderStars(category.rating)}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-box">
            <h3>We are Homade:</h3>
            <ul>
              <li>Durability</li>
              <li>Authenticity</li>
              <li>Good quality</li>
            </ul>
          </div>
          <div className="footer-box">
            <h3>About us:</h3>
            <p>
              We offer you a place where you can show your work and also buy
              people’s creations.
            </p>
          </div>
        </div>
        <div className="footer-icons">
          <a
            href="https://facebook.com"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/facebook.png" alt="Facebook" />
          </a>
          <a href="tel:+1234567890" className="icon">
            <img src="/phone.png" alt="Phone" />
          </a>
          <a
            href="https://instagram.com"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram.png" alt="Instagram" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Search;
