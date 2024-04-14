import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../css/components/navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    // Implement logout logic here
    navigate('/seller/login'); // Redirect to login page after logout
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Logo</h2>
        </div>
        <div className={`nav-menu ${showMenu ? 'active' : ''}`}>
          <ul className={`menu-items ${showMenu ? 'open' : ''}`}>
            <li>
              <NavLink to="/seller/dashboard" activeClassName="active">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/seller/profile" activeClassName="active">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/seller/complaint" activeClassName="active">
                Complaint
              </NavLink>
            </li>
            <li>
              <NavLink to="/seller/add-product" activeClassName="active">
                Add Product
              </NavLink>
            </li>
            <li>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </li>
          </ul>
          
        </div>
        <div className={`menu-icon ${showMenu ? 'open' : ''}`} onClick={handleToggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
