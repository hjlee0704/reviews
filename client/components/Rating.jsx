import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ rating }) => {
  const sources = {
    1: 'https://proxy-imgs.s3-us-west-1.amazonaws.com/oneStar.png',
    2: 'https://proxy-imgs.s3-us-west-1.amazonaws.com/twoStars.png',
    3: 'https://proxy-imgs.s3-us-west-1.amazonaws.com/threeStars.png',
    4: 'https://proxy-imgs.s3-us-west-1.amazonaws.com/fourStars.png',
    5: 'https://proxy-imgs.s3-us-west-1.amazonaws.com/fiveStars.png',
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
