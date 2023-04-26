import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/style.css';

const Header = ({ isLoggedIn, handleLogout }) => (
  <>
    <nav className="nav">
      <div className="nav-wrapper">
        <div
          className="nav-pop"
          id="nav-pop"
        >
          <span className="humburger">&#9868;</span>
        </div>
        <div className="links">
          <ul className="nav-list">
            {!isLoggedIn ? (
              <li className="nav-item">
                <NavLink to="/login" className="link">Login</NavLink>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/products" className="link">Products</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/cart" className="link">My Cart</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/" onClick={handleLogout} className="link">Signout</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="nav-search">
          <span className="nav-search-icon">
            &#128270;
          </span>
        </div>
      </div>
    </nav>
  </>
);

export default Header;

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};
