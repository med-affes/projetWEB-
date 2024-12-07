import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import "./Basket.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type BasketItem = {
  product_id: number;
  product_price: number;
  product_name: string;
  img: string;
};

const Basket: React.FC = () => {
  const navigate = useNavigate();
  const [openSingleModal, setOpenSingleModal] = useState(false);
  const [openBuyAllModal, setOpenBuyAllModal] = useState(false);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [bankAccount, setBankAccount] = useState("");
  const [bankPassword, setBankPassword] = useState(""); // Add state for bank password
  const [items, setItems] = useState<BasketItem[]>([]);

  const handleGoBackClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchBasketItems = async () => {
      const userId = localStorage.getItem("userId");

      if (userId) {
        try {
          const response = await axios.get(
            `http://localhost:3001/api/basket/${userId}`
          );
          console.log("Fetched basket items:", response.data);
          setItems(response.data);
        } catch (error) {
          console.error("Error fetching basket items:", error);
        }
      } else {
        navigate("/basket");  // Redirect to basket if not authenticated
      }
    };

    fetchBasketItems();
  }, [navigate]);

  const handleBuyClick = () => {
    setOpenSingleModal(true);
  };

  const handleBuyAllClick = () => {
    setOpenBuyAllModal(true);
  };

  const handleConfirm = () => {
    alert(`Bank Account: ${bankAccount}, Bank Password: ${bankPassword}`);
    setOpenSingleModal(false);
    setOpenBuyAllModal(false);
    setOpenDetailsModal(false);
  };

  const handleDelete = async (productId: number) => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      try {
        const response = await axios.delete(
          `http://localhost:3001/api/basket/${userId}/${productId}`
        );
        if (response.status === 200) {
          setItems(items.filter((item) => item.product_id !== productId));
        } else {
          console.error("Error deleting product from basket:", response.data);
        }
      } catch (error) {
        console.error("Error deleting product from basket:", error);
      }
    } else {
      navigate("/basket");  // Redirect to basket if not authenticated
    }
  };

  const renderItem = (item: BasketItem) => (
    <div key={item.product_id} className="basket-item">
      <img src={item.img} alt={item.product_name} className="item-image" />
      <div className="item-details">
        <p className="item-name">{item.product_name}</p>
        <p className="item-price">Price: ${item.product_price}</p>
        <Button
          variant="contained"
          className="buy-button"
          onClick={handleBuyClick}
          sx={{
            backgroundColor: "#E07A58",
            "&:hover": {
              backgroundColor: "#f7916f",
            },
          }}
        >
          BUY
        </Button>
        <Button
          variant="contained"
          className="delete-button"
          onClick={() => handleDelete(item.product_id)}
          sx={{
            backgroundColor: "#E07A58",
            "&:hover": {
              backgroundColor: "#f7916f",
            },
            marginLeft: "10px",
          }}
        >
          DELETE
        </Button>
      </div>
    </div>
  );

  return (
    <div className="basket-container">
      <div className="goback">
        <img
          src="goback.png"
          alt="Go Back"
          className="icon"
          onClick={handleGoBackClick}
        />
      </div>
      <div>
        <div className="cart-header">
          <div className="cart">
            <img src="/basketicon.png" alt="basket" />
            <h2>Basket</h2>
          </div>
          <Button
            variant="contained"
            className="buy-all-button"
            onClick={handleBuyAllClick}
            sx={{
              backgroundColor: "#E07A58",
              "&:hover": {
                backgroundColor: "#f7916f",
              },
            }}
          >
            Buy All
          </Button>
        </div>
        <div className="basket-items">{items.map(renderItem)}</div>
      </div>

      {/* Modal for Single Buy */}
      <Modal open={openSingleModal} onClose={() => setOpenSingleModal(false)}>
        <Box sx={style}>
          <Typography variant="h6">Purchase Item</Typography>
          <input
            type="text"
            className="form-control"
            placeholder="Enter bank account"
            value={bankAccount}
            onChange={(e) => setBankAccount(e.target.value)}
          />
          <input
            type="password"
            className="form-control"
            placeholder="Enter bank password"
            value={bankPassword}
            onChange={(e) => setBankPassword(e.target.value)}
          />
          <Button onClick={handleConfirm} color="primary">
            Confirm
          </Button>
        </Box>
      </Modal>

      {/* Modals for Buy All */}
      <Modal open={openBuyAllModal} onClose={() => setOpenBuyAllModal(false)}>
        <Box sx={style}>
          <Typography variant="h6">Confirm Purchase</Typography>
          <Typography sx={{ mt: 2 }}>
            You are going to buy all the items.
          </Typography>
          <Button onClick={() => setOpenDetailsModal(true)} color="primary">
            Continue
          </Button>
        </Box>
      </Modal>

      {/* Nested Modal for Entering Bank Account */}
      <Modal open={openDetailsModal} onClose={() => setOpenDetailsModal(false)}>
        <Box sx={style}>
          <Typography variant="h6">Enter Bank Account Details</Typography>
          <input
            type="text"
            className="form-control"
            placeholder="Enter bank account"
            value={bankAccount}
            onChange={(e) => setBankAccount(e.target.value)}
          />
          <input
            type="password"
            className="form-control"
            placeholder="Enter bank password"
            value={bankPassword}
            onChange={(e) => setBankPassword(e.target.value)}
          />
          <Button onClick={handleConfirm} color="primary">
            Confirm
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Basket;
