import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import EditProductModal from './EditProductModal';
import './Product.css';

const Product: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [productName, setProductName] = useState<string>('Product name');
  const [productDescription, setProductDescription] = useState<string>('Ingredients: Pepper, Cheese...');
  const [productPrice, setProductPrice] = useState<string>('20$');

  const navigate = useNavigate(); // Correct useNavigate usage

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleGoBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="product-page">
      <div className="goback">
        <img src="goback.png" alt="Go Back" className="icon" onClick={handleGoBackClick} />
      </div>

      {/* Product details */}
      <div className="product-details">
        {/* Left Column: Product Description */}
        <div className="product-info">
          <h2 className="product-name">{productName}</h2>
          <p>{productDescription}</p>
          <p>Stock: 20</p>
          <p>Price: {productPrice}</p>
          <p>Sells: 30</p>
        </div>

        {/* Right Column: Product Image and Buttons */}
        <div className="product-image">
          <img src="pizza.jpg" alt="Pizza" />
          <div className="action-buttons">
            <button className="modify-button" onClick={handleOpenModal}>Modify</button>
            <button className="delete-button">Delete</button>
          </div>
        </div>
      </div>

      {/* Modal for Editing Product */}
      <EditProductModal
        open={isModalOpen}
        handleClose={handleCloseModal}
        productName={productName}
        productDescription={productDescription}
        productPrice={productPrice}
        setProductName={setProductName}
        setProductDescription={setProductDescription}
        setProductPrice={setProductPrice}
      />

      {/* Reviews section */}
      <div className="reviews-section">
        <div className="review">
          <img className="user-avatar" src="emnag.jpg" alt="User 1" />
          <div className="review-content">
            <div className="stars">⭐⭐⭐</div>
            <p>J'ai aimé ce plat</p>
          </div>
        </div>

        <div className="review">
          <img className="user-avatar" src="emnag.jpg" alt="User 2" />
          <div className="review-content">
            <div className="stars">⭐⭐⭐⭐</div>
            <p>Bravo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
