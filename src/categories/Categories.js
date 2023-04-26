import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCategories } from './categorySlice';
import './categories.css';

function Categories() {
  const dispatch = useDispatch();
  const { loading, categories, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <>
      <br />
      {' '}
      <br />
      <br />
      {' '}
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
        {categories.map((category) => {
          const catLink = `/category/${category}`;
          return (
            <div key={category} className="product">
              <h3>
                <NavLink to={catLink}>
                  {' '}
                  {category}
                </NavLink>
              </h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Categories;
