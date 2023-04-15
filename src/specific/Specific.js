import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpecificProducts } from './specificSlice';
import { addProductToCart } from '../cart/cartSlice';
import { fetchSingleProductDetails } from '../products/productSlice';

import './specific.css';

function Specific() {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.specifics);
  const { id } = useParams();
  const handleClick = (id) => {
    const pop = document.getElementById('popup-container');
    pop.style.display = 'block';
    const data = fetchSingleProductDetails(id);
    data.then((res) => {
      pop.innerHTML = `
        <div class="popup-details pad">
          <div class="product-details">
            <center><h2>${res.title}</h2></center>
            <div class="img-container">
              <img src=${res.image} alt=${res.title} class="img" />
            </div>
            <div class="details">
              <p>
                <h3>Price: $ ${res.price} </h3>
              </p>
              <p>
                ${res.description}
              </p>
            </div>
          </div>
          <div class="act">
            <div class="actions">
              <button id="close-btn" class="close">Close</button>
            </div>
          </div>
        </div>
      `;
      const closeBtn = document.getElementById('close-btn');
      closeBtn.addEventListener('click', () => {
        pop.style.display = 'none';
      });
    });
  };
  const handleChange = (event) => {
    const { value } = event.target;
    const url = value === 'all' ? '/' : `/category/${value}`;
    window.location.href = url;
  };
  const addToCart = (id, title, price) => {
    const product = { id, title, price };
    dispatch(addProductToCart({ product }));
    alert('Item has been added to the cart');
  };
  useEffect(() => {
    dispatch(fetchSpecificProducts(id));
    const data = axios.get('https://fakestoreapi.com/products/categories');
    data.then((response) => setCategories(response.data));
  }, []);
  return (
    <>
      <br />
      {' '}
      <br />
      <br />
      {' '}
      <br />
      <div className="products-header">
        <select
          id="category"
          className="search"
          onChange={handleChange}
        >
          <option value="all">All</option>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </div>
      <br />
      <div className="products-div">
        {loading && <div> loading... </div>}
        {!loading && error ? (
          <div>
            {' '}
            Error:
            {' '}
            {error}
            {' '}
          </div>
        ) : null }
        {products.map((product) => (
          <div key={product.id} className="product">
            <span className="title">{product.title}</span>
            <div className="product-details">
              <div className="img-container">
                <img src={product.image} alt={product.title} className="img" />
              </div>
              <div className="details">
                <p>
                  Price: $
                  {product.price}
                </p>
                <p>
                  {' '}
                  {product.description.substr(0, 60)}
                  {' '}
                </p>
                <div className="action-buttons">
                  <button
                    key={product.id}
                    onClick={(event) => handleClick(product.id, event)}
                    className="add-to-cart"
                    type="button"
                  >
                    View Details
                  </button>

                  <button
                    key={product.id}
                    onClick={() => addToCart(product.id, product.title, product.price)}
                    className="add-to-cart"
                    type="button"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="popup-container" id="popup-container"> </div>
      </div>
    </>
  );
}

export default Specific;
