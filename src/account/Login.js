import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { loginTrue } from './loginSlice';

import './signup.css';

function Login() {
  // const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { username, password };
    axios
      .post('https://fakestoreapi.com/auth/login', data)
      .then(() => {
        window.location.href = '/';
      })
      .catch((error) => {
        // dispatch(loginTrue(true));
        if (error.response) {
          setIsLoggedIn(true);
          window.location.href = '/';
        } else {
          alert(`Wrong login Details, please try again!${error}`);
        }
      });
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
