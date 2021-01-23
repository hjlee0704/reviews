import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ rating }) => {
  const sources = {
    1: 'imgs/oneStar.png',
    2: 'imgs/twoStars.png',
    3: 'imgs/threeStars.png',
    4: 'imgs/fourStars.png',
    5: 'imgs/fiveStars.png',
  };
  return (
    <>
      <img src={sources[rating.toString()]} alt="" className="rating-stars" />
    </>
  );
};

Rating.defaultProps = {
  rating: 5,
};

Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
