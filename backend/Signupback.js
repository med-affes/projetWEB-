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

router.post('/api/signups', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.Password, 10);
    const user = {
      UserName: req.body.UserName,
      Address: req.body.Address,
      Phone_Number: req.body.Phone_Number,
      E_mail: req.body.E_mail,
      Password: hashedPassword
    };
    connection.query('INSERT INTO Users SET ?', user, (err, result) => {
      if (err) {
        console.error('Error inserting user:', err);
        res.status(500).send('Error saving user');
        return;
      }
      res.status(201).send(`User added with ID: ${result.insertId}`);
    });
  } catch (err) {
    console.error('Error in /api/signups endpoint:', err);
    res.status(500).send('Error saving user');
  }
});

export default router;
