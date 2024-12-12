import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./HomePage";
import UserProfilePage from "./UserProfilPage";
import Basket from "./Basket";
import Signin from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Search from "./Search";
import Homing from "./Components/Homing";
import Product from "./Product";
import ProductView from "./ProductView";
import OtherProfilePage from "./OtherProfilPage"; // Import the OtherProfilePage component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/search" element={<Search />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productview" element={<ProductView />} />
        <Route path="/Homing" element={<Homing />} />
        <Route path="/otherprofile" element={<OtherProfilePage />} />{" "}
        {/* Add the OtherProfilePage route */}
      </Routes>
    </Router>
  );
};

export default App;
