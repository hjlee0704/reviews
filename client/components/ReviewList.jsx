import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const ReviewList = ({ reviews }) => {
  const reviewList = reviews.map((review) => (
    // eslint-disable-next-line no-underscore-dangle
    <div key={review._id} className="reviews-container">
      <img src={review.avatar} alt="http://www.dummy.com" />
      <a href="http://dummy.com">{ review.name }</a>
      <span>{ moment(review.date).format('ll') }</span>
      <p id="rating">{ review.rating }</p>
      <div className="description-container">
        <p>{ review.description }</p>
      </div>
      <img src={review.imageUrl} alt="http://www.dummy.com" />
      <p id="purchased">Purchased Item:</p>
      <a href="http://dummy.com">Buddha | Shoe Charms | Shoe Decor | Crok Charms | Christmas</a>
    </div>
  ));
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
