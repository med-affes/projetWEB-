import express from 'express';
import mysql from 'mysql';

const router = express.Router();

const basketConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'Basket'
});

const productConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'Product'
});

basketConnection.connect((err) => {
  if (err) {
    console.error('Error connecting to Basket database:', err);
    return;
  }
  console.log('Connected to Basket database');
});

productConnection.connect((err) => {
  if (err) {
    console.error('Error connecting to Product database:', err);
    return;
  }
  console.log('Connected to Product database');
});

router.get('/api/basket/:userId', (req, res) => {
  const userId = req.params.userId;
  console.log(`Fetching basket items for user: ${userId}`);

  const query = `
    SELECT p.product_id, p.product_name, p.img, b.product_price, b.date 
    FROM Basket.Baskets b 
    JOIN Product.Products p ON b.product_id = p.product_id 
    WHERE b.user_id = ?
  `;
  console.log(query);

  basketConnection.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error fetching basket items:', err);
      res.status(500).send('Error fetching basket items');
      return;
    }
    console.log('Fetched basket items:', results);
    res.status(200).json(results);
  });
});

router.delete('/api/basket/:userId/:productId', (req, res) => {
  const { userId, productId } = req.params;
  console.log(`Deleting product ${productId} from user ${userId}'s basket`);

  const deleteQuery = 'DELETE FROM Baskets WHERE user_id = ? AND product_id = ?';
  basketConnection.query(deleteQuery, [userId, productId], (err, results) => {
    if (err) {
      console.error('Error deleting product from basket:', err);
      res.status(500).send('Error deleting product from basket');
      return;
    }
    console.log(`Product ${productId} deleted from user ${userId}'s basket`);
    res.status(200).send(`Product ${productId} deleted from user ${userId}'s basket`);
  });
});

export default router;
