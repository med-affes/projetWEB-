import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserProfilePage.css';

const UserProfilePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/user');
        setUserData(response.data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const renderCategory = (category) => {
    return (
      <div className="category">
        <h3 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
        <div className="products-grid">
          {userData.products.filter(product => product.category === category).map((product, index) => (
            <div key={index} className="product-placeholder">
              <img src={product.img} alt={product.alt} className="rounded-4" />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="profile-container">
      {userData ? (
        <>
          <div className="profile-header">
            <img src={userData.profile_image} alt="Profile Picture" className="profile-picture" />
            <h1 className="profile-name">{userData.E_mail}</h1>
            <p className="profile-description">I'm {userData.E_mail}, and I love making food at home!</p>
          </div>
          <div className="products-section">
            <h1>My own products</h1>
            <div className="products-columns">
              <div className="column">{renderCategory('fashion')}</div>
              <div className="column">{renderCategory('food')}</div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfilePage;
