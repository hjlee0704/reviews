import React from 'react';
import moment from 'moment';

const ReviewList = ({ reviews }) => {
  const reviewList = reviews.map(review => (
    <div key={ review._id } className="reviews-container">
      <img src={ review.avatar } />
      <a href="#">{ review.name }</a>
      <span>{ moment(review.date).format('ll') }</span>
      <p id="rating">{ review.rating }</p>
      <div className="description-container">
        <p>{ review.description }</p>
      </div>
      <img src={ review.imageUrl } />
      <p id="purchased">Purchased Item:</p>
      <a href="#">Buddha | Shoe Charms | Shoe Decor | Crok Charms | Christmas</a>
    </div>
  ))
  return (
    <div className="reviewList-container">
      { reviewList }
    </div>
  )
}

export default ReviewList;