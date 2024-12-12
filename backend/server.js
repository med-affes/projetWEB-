import express from 'express';
import cors from 'cors';
import signinRouter from './Signinback.js';
import basketRouter from './basketback.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use(signinRouter); // Use the sign-in route
app.use(basketRouter); // Use the basket route

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
