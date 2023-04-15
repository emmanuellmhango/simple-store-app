import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Products from './products/Products';
import Categories from './categories/Categories';
import Specific from './specific/Specific';
import Cart from './cart/Cart';
import Signup from './account/Signup';
import Login from './account/Login';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/category/:id" element={<Specific />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </div>
);

export default App;
