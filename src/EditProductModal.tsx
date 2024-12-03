import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface EditProductModalProps {
  open: boolean;
  handleClose: () => void;
  productName: string;
  productDescription: string;
  productPrice: string;
  setProductName: (name: string) => void;
  setProductDescription: (description: string) => void;
  setProductPrice: (price: string) => void;
}

const EditProductModal: React.FC<EditProductModalProps> = ({
  open,
  handleClose,
  productName,
  productDescription,
  productPrice,
  setProductName,
  setProductDescription,
  setProductPrice,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Modify Product
        </Typography>
        <div className="product-form">
          <input
            type="text"
            className="product-input"
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <textarea
            className="product-description"
            placeholder="Enter product description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
          <input
            type="text"
            className="product-price"
            placeholder="Enter product price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <Button onClick={handleClose}>Save</Button>
      </Box>
    </Modal>
  );
};

export default EditProductModal;
