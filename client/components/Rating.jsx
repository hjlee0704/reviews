import React from 'react';

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

export default Rating;