import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import './signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    city: '',
    street: '',
    zipcode: '',
    phone: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://fakestoreapi.com/users', formData)
      .then(() => {
        // eslint-disable-next-line no-alert
        alert('User created successfully! Please log in.');
        window.location.href = '/login';
      })
      .catch(() => {
        // eslint-disable-next-line no-alert
        alert('Error creating user!');
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
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
          <h1> Sign Up </h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input onChange={handleInputChange} type="email" id="email" name="email" placeholder="email" className="form-control" required />
            </div>
            <div className="form-group">
              <input onChange={handleInputChange} type="text" id="username" name="username" placeholder="username" className="form-control" required />
            </div>
            <div className="form-group">
              <input onChange={handleInputChange} type="password" id="password" name="password" placeholder="password" className="form-control" required />
            </div>
            <div className="form-group">
              <input onChange={handleInputChange} type="text" id="firstname" name="firstname" placeholder="firstname" className="form-control" required />
            </div>
            <div className="form-group">
              <input onChange={handleInputChange} type="text" id="lastname" name="lastname" placeholder="lastname" className="form-control" required />
            </div>
            <div className="form-group">
              <input onChange={handleInputChange} type="text" id="city" name="city" placeholder="city" className="form-control" required />
            </div>
            <div className="form-group">
              <input onChange={handleInputChange} type="text" id="street" name="street" placeholder="street" className="form-control" required />
            </div>
            <div className="form-group">
              <input onChange={handleInputChange} type="text" id="zipcode" name="zipcode" placeholder="zipcode" className="form-control" required />
            </div>
            <div className="form-group">
              <input onChange={handleInputChange} type="tel" id="phone" name="phone" placeholder="phone" className="form-control" required />
            </div>
            <div className="form-group">
              <input type="submit" value="Sign Up" className="form-control-btn" />
            </div>
          </form>
        </div>
        <br />
        <NavLink to="/login">Already have an account? Log in</NavLink>
      </div>
    </div>
  );
}

export default Signup;
