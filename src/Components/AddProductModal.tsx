import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

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

const AddProductModal: React.FC<{ open: boolean; handleClose: () => void }> = ({ open, handleClose }) => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = () => {
    alert(`Product added: ${description}, ${category}, ${stock}, ${price}`);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="add-product-modal-title"
      aria-describedby="add-product-modal-description"
    >
      <Box sx={style}>
        <Typography id="add-product-modal-title" variant="h6" component="h2">
          Add Product
        </Typography>
        
        <div style={{ margin: '20px 0' }}>
          <input accept="image/*" id="icon-button-file" type="file" style={{ display: 'none' }} />
          <label htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
            <Typography component="span">Add the product's photo</Typography>
          </label>
        </div>

        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
          placeholder="Add the description"
          InputLabelProps={{ style: { color: '#3D405B' } }} // Label color
        />

        <TextField
          label="Category"
          variant="outlined"
          fullWidth
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          margin="normal"
          placeholder="Add category"
          InputLabelProps={{ style: { color: '#3D405B' } }} // Label color
        />

        <TextField
          label="Stock"
          variant="outlined"
          fullWidth
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          margin="normal"
          placeholder="Stock quantity"
          InputLabelProps={{ style: { color: '#3D405B' } }} // Label color
        />

        <TextField
          label="Price"
          variant="outlined"
          fullWidth
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          margin="normal"
          placeholder="Price"
          InputLabelProps={{ style: { color: '#3D405B' } }} // Label color
        />

        <Button
          variant="contained"
          onClick={handleSubmit}
          style={{ marginTop: '20px', backgroundColor: '#81B29A' }} // Button color
        >
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default AddProductModal;
