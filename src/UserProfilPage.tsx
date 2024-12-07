import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddProductModal from './Components/AddProductModal';  // Import the new modal component
import './UserProfilePage.css';

const UserProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [openAddModal, setOpenAddModal] = useState(false);

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then(({ Popover }) => {
      const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
      popoverTriggerList.map((popoverTriggerEl) => {
        return new Popover(popoverTriggerEl, {
          trigger: 'hover',
        });
      });
    });
  }, []);

  const handleGoBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleBasketClick = () => {
    navigate('/basket');
  };
  const handleLogout = () => {
    // Clear user session data
    localStorage.removeItem('authToken'); // Example: Remove auth token from local storage
    sessionStorage.clear(); // Clear any session data if stored

    // Redirect to the login page
    navigate('/login');
  };

  const handleAddClick = () => {
    setOpenAddModal(true);
  };

  const handleProductClick = () => {
    setOpenAddModal(false); // Ensure modal is closed
    navigate('/product'); // Navigate to the Product page
  };

  const products = [
    { img: '/cake.jpg', alt: 'Product 1', name: 'Cake', price: '$10', sells: 150, stock: 20, category: 'food' },
    { img: '/croissant.jpg', alt: 'Product 2', name: 'Croissant', price: '$5', sells: 120, stock: 35, category: 'food' },
    { img: '/pizza.jpg', alt: 'Product 3', name: 'Pizza', price: '$15', sells: 80, stock: 10, category: 'food' },
    { img: '/pathe.jpg', alt: 'Product 4', name: 'Pathé', price: '$8', sells: 200, stock: 50, category: 'food' },
    { img: '/Couscous.jpg', alt: 'Product 5', name: 'Couscous', price: '$12', sells: 90, stock: 25, category: 'food' },
    { img: '/yoyo.jpg', alt: 'Product 6', name: 'Yoyo', price: '$7', sells: 110, stock: 30, category: 'food' },
    { img: '/tshirt.jpg', alt: 'Product 7', name: 't-shirt', price: '$50', sells: 60, stock: 15, category: 'fashion' },
    { img: '/pants.jpg', alt: 'Product 8', name: 'pant', price: '$20', sells: 100, stock: 40, category: 'fashion' },
    { img: '/paint.jpg', alt: 'Product 9', name: 'flower-face', price: '$200', sells: 5, stock: 2, category: 'painting' },
    { img: '/zarbiya.jpg', alt: 'Product 10', name: 'carpet', price: '$300', sells: 8, stock: 5, category: 'artisan' }
  ];

  const renderCategory = (category: string) => {
    return (

      <div className="category">
        <h3 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
        <div className="products-grid">
          {products.filter(product => product.category === category).map((product, index) => (
            <div
              key={index}
              className="product-placeholder"
              onClick={handleProductClick} // Navigate to the Product page
              data-bs-toggle="popover"
              data-bs-trigger="hover focus"
              data-bs-content={`Name: ${product.name}<br>Price: ${product.price}<br>Sells: ${product.sells}<br>Stock: ${product.stock}`}
              data-bs-html="true"
            >
              <img src={product.img} alt={product.alt} className="rounded-4" />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="profile-container">
      <div className="goback">
        <img src="goback.png" alt="Go Back" className="icon" onClick={handleGoBackClick} />
      </div>
      <div className="profile-header">
        <div className="profile-info">
          <img src="/emnag.jpg" alt="Profile Picture" className="profile-picture" />
          <h1 className="profile-name">Anna Parker</h1>
        </div>
        <p className="profile-description">
          I'm Anna Parker, and I love making food at home! For me, cooking isn't just about feeding people; it's a way to bring joy and creativity into everyday life.
        </p>
      </div>
      <div className="icons">
        <img
          src="/notification.png"
          alt="Notifications"
          className="icon"
          data-bs-toggle="popover"
          data-bs-trigger="hover focus"
          data-bs-content="You have 5 new notifications!"
          data-bs-html="true"
        />
        <img
          src="/basketicon.png"
          alt="Cart"
          className="icon"
          onClick={handleBasketClick}
        />
        <img
          src="/add.png"
          alt="Add"
          className="icon"
          onClick={handleAddClick}
        />
        <img
          src="/logout.png"
          alt="logout"
          className="icon"
          data-bs-toggle="popover"
          data-bs-trigger="hover focus"

        />
      </div>
      <div className="products-section">
        <h1>My own products</h1>
        <div className="products-columns">
          <div className="column">
            {renderCategory('fashion')}
            {renderCategory('painting')}
          </div>
          <div className="column">
            {renderCategory('food')}
            {renderCategory('artisan')}
          </div>
        </div>
      </div>

      {/* Add the AddProductModal here */}
      <AddProductModal open={openAddModal} handleClose={() => setOpenAddModal(false)} />
    </div>
  );
};

export default UserProfilePage;
