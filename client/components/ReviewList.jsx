import React from 'react';

const ReviewList = ({ reviews }) => {
  const reviewList = reviews.map(review => (
    <div key={ review._id } className="reviewList-container">
      <img src={ review.avatar } />
      <p>{ review.name }</p>
      <p>{ review.date }</p>
      <p>{ review.description }</p>
      <img src={ review.imageUrl } />
      <p>{ review.paragraph }</p>
    </div>
  ))
  return (
    <div>
      { reviewList }
    </div>
  )
}

export default ReviewList;