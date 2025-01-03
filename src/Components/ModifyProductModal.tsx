import React, { useState } from 'react';
import './ModifyProductPage.css'; // Reuse your existing CSS

interface ModifyProductModalProps {
  open: boolean;
  handleClose: () => void;
}

const ModifyProductModal: React.FC<ModifyProductModalProps> = ({ open, handleClose }) => {
  const [photo, setPhoto] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [stocks, setStocks] = useState<number | ''>('');
  const [price, setPrice] = useState<number | ''>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ photo, description, category, stocks, price });
    handleClose(); // Close modal after submission
  };

  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <form className="modify-product-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Add the product's photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files ? e.target.files[0] : null)}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              placeholder="Add the description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Add Category</label>
            <input
              type="text"
              placeholder="Add category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Stocks</label>
            <input
              type="number"
              placeholder="Stocks"
              value={stocks}
              onChange={(e) => setStocks(Number(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
          <button type="button" className="close-button" onClick={handleClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModifyProductModal;
