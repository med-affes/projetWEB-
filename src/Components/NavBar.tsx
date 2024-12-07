import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <div>
      <header className='header'>
        <div className="navbar-header">
          <img src="/logo.png" alt="homade" className="logo" />
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/Homing">
                <img src="/homeic.png" alt="Search" className="icon" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <img src="/profileicon.png" alt="Profile" className="icon" />
                Profile
              </Link>
            </li>
            <li>
              <Link to="/basket">
                <img src="/basketicon.png" alt="Basket" className="icon" />
                Basket
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
