/* eslint-disable no-underscore-dangle */
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import Rating from './Rating';

const ReviewList = ({ reviews }) => {
  const reviewList = reviews.map((review) => {
    const dateString = review._id;
    const dateObj = new Date(dateString);
    const momentObj = moment(dateObj);
    const momentString = momentObj.format('ll');
    // eslint-disable-next-line no-underscore-dangle
    return (
      <div key={review._id} className="reviews-container">
        <img src={review.avatar} alt="http://www.dummy.com" />
        <a href="http://dummy.com" className="customer-name">{ review.name }</a>
        <span>{ momentString }</span>
        <Rating rating={review.rating} />
        {/* <p id="rating">{ review.rating }</p> */}
        <div className="description-container">
          <p>{ review.description }</p>
        </div>
        <img src={review.imageUrl} alt="http://www.dummy.com" />
        <p id="purchased">Purchased Item:</p>
        <img src={review.shopImage} alt="http://www.dummy.com" className="purchased-img" />
        <a href="http://dummy.com" className="customer-name">{review.purchasedItem}</a>
      </div>
    );
  });
  return (
    <div className="reviewList-container">
      { reviewList }
    </div>
  );
};

ReviewList.defaultProps = {
  reviews: [],
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      date: PropTypes.string,
      description: PropTypes.string,
      imageUrl: PropTypes.string,
    }),
  ),
};

export default ReviewList;
