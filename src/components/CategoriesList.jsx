import PropTypes from 'prop-types';
import React from 'react';
import Wrapper from './styled/Wrapper';
import Text from './styled/Text';

function CategoriesList({ categories, activeCategory, onCategoryChange }) {

  return (
    <Wrapper $direction='row' $gap='8px' $wrap='wrap'>
      {
        categories.map((category) => (
          <Wrapper 
            key={category}
            className={activeCategory === category ? 'active' : ''}
            onClick={() => onCategoryChange(category)}
            $background='#e4ecf7' $radius='6px' $padding='6px 10px'
            $cursor='pointer' $transform='scale(0.9)' $transition='transform 0.3s ease'
          >
            <Text $size='14px' $color='#505780' $weight='500'>{category}</Text>
          </Wrapper>
        ))
      }
    </Wrapper>
  );
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default CategoriesList;