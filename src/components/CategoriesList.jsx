import PropTypes from 'prop-types';
import React from 'react';

function CategoriesList({ categories, activeCategory, onCategoryChange }) {

  return (
    <ul className='categories-list'>
      {
        categories.map((category) => (
          <li
            key={category}
            className={activeCategory === category ? 'active' : ''}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </li>
        ))
      }
    </ul>
  );
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default CategoriesList;