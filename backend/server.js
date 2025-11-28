import express from 'express';
import cors from 'cors';
import signinRouter from './Signinback.js';
import signupRouter from './Signupback.js'; // S'assurer que signupRouter est bien importé
import basketRouter from './basketback.js';
import userProfileRouter from './UserProfilepage.js'; // Import the new user profile route

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use(signinRouter); // Use the sign-in route
app.use(signupRouter); // Use the sign-up route
app.use(basketRouter); // Use the basket route
app.use(userProfileRouter); // Use the user profile route

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
