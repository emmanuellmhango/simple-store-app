import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import './signup.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* eslint-disable */
    axios.post('https://fakestoreapi.com/auth/login', {
      username: username,
      password: password
    })
      .then(() => {
        onLogin();
        alert('You have successfully logged in');
        navigate('/products');
      })
      .catch((error) => {
        alert(`There was an error logging in, please try again! { ${error} }`);
      });
    /* eslint-enable */
  };

  return (
    <div className="account">
      <br />
      {' '}
      <br />
      <br />
      {' '}
      <br />

      <div className="signup-container">
        <div className="signup-form">
          <h1> Login </h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                value={username}
                onChange={handleUsernameChange}
                type="text"
                id="username"
                name="username"
                placeholder="username"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                value={password}
                onChange={handlePasswordChange}
                type="password"
                id="password"
                name="password"
                placeholder="password"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input type="submit" value="Login" className="form-control-btn" />
            </div>
          </form>
        </div>
        <NavLink to="/signup">You dont have an account? Sign Up!</NavLink>
      </div>
    </div>
  );
}

export default Login;

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
