import express from 'express';
import mysql from 'mysql';
import bcrypt from 'bcrypt';

const router = express.Router();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'signup'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

router.post('/api/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate user credentials
    const query = 'SELECT * FROM Users WHERE E_mail = ?';
    connection.query(query, [email], async (err, results) => {
      if (err) {
        res.status(500).send('Error querying user');
        return;
      }

      if (results.length === 0) {
        res.status(401).send('YOU DON\'T HAVE AN ACCOUNT');
        return;
      }

      const user = results[0];
      const isPasswordValid = await bcrypt.compare(password, user.Password);

      if (!isPasswordValid) {
        res.status(401).send('WRONG PASSWORD');
        return;
      }

      res.status(200).json({ id: user.id, email: user.E_mail });
    });
  } catch (err) {
    res.status(500).send('Error processing request');
  }
});

export default router;
