import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './Basket.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Basket: React.FC = () => {
  const navigate = useNavigate();
  
  // Use a custom back navigation function
  const handleGoBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const [openSingleModal, setOpenSingleModal] = useState(false);
  const [openBuyAllModal, setOpenBuyAllModal] = useState(false);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [bankAccount, setBankAccount] = useState('');

  // Sample basket items with mixed categories
  const items = [
    { id: 1, img: '/sushi.jpg', price: '$15', description: 'Delicious sushi rolls.', name: 'Sushi', category: 'food' },
    { id: 2, img: '/pizza.jpg', price: '$20', description: 'Cheesy pepperoni pizza.', name: 'Pizza', category: 'food' },
    { id: 3, img: '/burger.jpg', price: '$12', description: 'Juicy beef burger with fries.', name: 'Burger', category: 'food' },
    { id: 4, img: '/dress.jpg', price: '$50', description: 'Elegant evening dress.', name: 'Dress', category: 'fashion' },
    { id: 5, img: '/tshirt.jpg', price: '$20', description: 'Casual cotton shirt.', name: 'Shirt', category: 'fashion' },
    { id: 6, img: '/scarf.jpg', price: '$15', description: 'Warm winter scarf.', name: 'Scarf', category: 'fashion' },
    { id: 7, img: '/paint.jpg', price: '$200', description: 'Beautiful landscape painting.', name: 'Landscape Painting', category: 'painter' },
    { id: 8, img: '/zarbiya.jpg', price: '$300', description: 'Handmade clay sculpture.', name: 'Sculpture', category: 'artisan' },
    { id: 9, img: '/vase.jpg', price: '$100', description: 'Artisan ceramic vase.', name: 'Ceramic Vase', category: 'artisan' },
    { id: 10, img: '/braclet.jpg', price: '$50', description: 'Handcrafted beaded bracelet.', name: 'Beaded Bracelet', category: 'artisan' }
  ];

  const handleBuyClick = () => {
    setOpenSingleModal(true);
  };

  const handleBuyAllClick = () => {
    setOpenBuyAllModal(true);
  };

  const handleConfirm = () => {
    alert(`Bank Account: ${bankAccount}`);
    setOpenSingleModal(false);
    setOpenBuyAllModal(false);
    setOpenDetailsModal(false);
  };

  return (
    <div className="basket-container">
      <div className="goback">
        <img src="goback.png" alt="Go Back" className="icon" onClick={handleGoBackClick} />
      </div>
      <div>
        <div className="cart-header">
          <div className='cart'>
            <img src="/basketicon.png" alt="basket" />
            <h2>Basket</h2>
          </div>
          <Button 
            variant="contained" 
            className="buy-all-button" 
            onClick={handleBuyAllClick}
            sx={{
              backgroundColor: '#E07A58',
              '&:hover': {
                backgroundColor: '#f7916f'
              }
            }}
          >
            Buy All
          </Button>
        </div>
        <div className="basket-items">
          {items.map(item => (
            <div key={item.id} className="basket-item">
              <img src={item.img} alt={item.name} className="item-image" />
              <div className="item-details">
                <p className="item-price">Price: {item.price}</p>
                <p className="item-description">{item.description}</p>
                <Button 
                  variant="contained" 
                  className="buy-button" 
                  onClick={handleBuyClick}
                  sx={{
                    backgroundColor: '#E07A58',
                    '&:hover': {
                      backgroundColor: '#f7916f'
                    }
                  }}
                >
                  BUY
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Single Buy */}
      <Modal
        open={openSingleModal}
        onClose={() => setOpenSingleModal(false)}
        aria-labelledby="single-buy-modal-title"
        aria-describedby="single-buy-modal-description"
      >
        <Box sx={style}>
          <Typography id="single-buy-modal-title" variant="h6" component="h2">
            Purchase Item
          </Typography>
          <input
            type="text"
            className="form-control"
            placeholder="Enter bank account"
            value={bankAccount}
            onChange={(e) => setBankAccount(e.target.value)}
          />
          <Button onClick={handleConfirm} color="primary">Confirm</Button>
        </Box>
      </Modal>

      {/* Modals for Buy All */}
      <Modal
        open={openBuyAllModal}
        onClose={() => setOpenBuyAllModal(false)}
        aria-labelledby="buy-all-modal-title"
        aria-describedby="buy-all-modal-description"
      >
        <Box sx={style}>
          <Typography id="buy-all-modal-title" variant="h6" component="h2">
            Confirm Purchase
          </Typography>
          <Typography id="buy-all-modal-description" sx={{ mt: 2 }}>
            You are going to buy all the items.
          </Typography>
          <Button onClick={() => setOpenDetailsModal(true)} color="primary">Continue</Button>
        </Box>
      </Modal>

      {/* Nested Modal for Entering Bank Account */}
      <Modal
        open={openDetailsModal}
        onClose={() => setOpenDetailsModal(false)}
        aria-labelledby="enter-details-modal-title"
        aria-describedby="enter-details-modal-description"
      >
        <Box sx={style}>
          <Typography id="enter-details-modal-title" variant="h6" component="h2">
            Enter Bank Account Details
          </Typography>
          <input
            type="text"
            className="form-control"
            placeholder="Enter bank account"
            value={bankAccount}
            onChange={(e) => setBankAccount(e.target.value)}
          />
          <Button onClick={handleConfirm} color="primary">Confirm</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Basket;
