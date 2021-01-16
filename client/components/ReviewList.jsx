import React from 'react';
import moment from 'moment';

const ReviewList = ({ reviews }) => {
  const reviewList = reviews.map(review => (
    <div key={ review._id } className="reviewList-container">
      <img src={ review.avatar } />
      <a href="#">{ review.name }</a>
      <span>{ moment(review.date).format('ll') }</span>
      <p>{ review.rating }</p>
      <div className="description-container">
        <p>{ review.description }</p>
      </div>
      <img src={ review.imageUrl } />
      <p>Purchased Item:</p>
      <a href="#">Buddha | Shoe Charms | Shoe Decor | Crok Charms | Christmas</a>
    </div>
  ))
  return (
    <div>
      { reviewList }
    </div>
  )
}

export default ReviewList;