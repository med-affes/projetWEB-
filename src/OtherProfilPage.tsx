import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddProductModal from './Components/AddProductModal';
import './UserProfilePage.css';

const OtherProfilPage: React.FC = () => {
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

  const products = [
    { img: '/cake.jpg', alt: 'Product 1', name: 'Cake', price: '$10', category: 'food' },
    { img: '/croissant.jpg', alt: 'Product 2', name: 'Croissant', price: '$5', category: 'food' },
    { img: '/pizza.jpg', alt: 'Product 3', name: 'Pizza', price: '$15', category: 'food' },
    { img: '/Couscous.jpg', alt: 'Product 5', name: 'Couscous', price: '$12', category: 'food' },
    { img: '/yoyo.jpg', alt: 'Product 6', name: 'Yoyo', price: '$7', category: 'food' },

    { img: '/tshirt.jpg', alt: 'Product 7', name: 'T-shirt', price: '$50', category: 'fashion' },
    { img: '/pants.jpg', alt: 'Product 8', name: 'Pant', price: '$20', category: 'fashion' },
    { img: '/jacket.jpg', alt: 'Product 13', name: 'Jacket', price: '$70', category: 'fashion' },
    { img: '/shoes.jpg', alt: 'Product 14', name: 'Shoes', price: '$60', category: 'fashion' },
    { img: '/hat.jpg', alt: 'Product 15', name: 'Hat', price: '$25', category: 'fashion' },

    { img: '/paint.jpg', alt: 'Product 9', name: 'Flower-Face', price: '$200', category: 'painting' },
    { img: '/landscape.jpg', alt: 'Product 16', name: 'Landscape', price: '$180', category: 'painting' },
    { img: '/portrait.jpg', alt: 'Product 17', name: 'Portrait', price: '$250', category: 'painting' },
    { img: '/abstract.jpg', alt: 'Product 18', name: 'Abstract Art', price: '$220', category: 'painting' },

    { img: '/zarbiya.jpg', alt: 'Product 10', name: 'Carpet', price: '$300', category: 'artisan' },
    { img: '/vase.jpg', alt: 'Product 17', name: 'Vase', price: '$80', category: 'artisan' },
    { img: '/sculpture.jpg', alt: 'Product 18', name: 'Sculpture', price: '$150', category: 'artisan' },
    { img: '/basket.jpg', alt: 'Product 19', name: 'Basket', price: '$40', category: 'artisan' },
    { img: '/jewelry.jpg', alt: 'Product 20', name: 'Jewelry', price: '$120', category: 'artisan' }
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
              data-bs-toggle="popover"
              data-bs-trigger="hover focus"
              data-bs-content={`Name: ${product.name}<br>Price: ${product.price}`}
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

export default OtherProfilPage;
