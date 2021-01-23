import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({
  reviewsPerPage,
  totalReviews,
  paginate,
  currentPage,
  average,
  incrementPage,
  decrementPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  const pages = pageNumbers.map((num) => (
    <li key={num} className="list-item">
      <a href="!#" id="paginate" className={currentPage === num ? 'disabled' : undefined} onClick={(e) => paginate(e, num)}>
        {num}
      </a>
    </li>
  ));

  return (
    <div className="pages-container">
      <ul className="unordered-list">
        <li className="list-item">
          <a href="!#" id="decrement" className={currentPage !== 1 ? 'arrows' : 'disabled arrows'} onClick={decrementPage}>
            <img src="imgs/leftArrow.png" className="arrows" alt="arrow" />
          </a>
        </li>
      </ul>
      <ul className="review-list unordered-list">
        {pages}
      </ul>
      <ul className="increment-link unordered-list">
        <li className="list-item">
          <a href="!#" id="increment" className={currentPage !== average ? 'arrows' : 'disabled arrows'} onClick={(incrementPage)}>
            <img src="imgs/rightArrow.png" className="arrows" alt="arrow" />
          </a>
        </li>
      </ul>
    </div>
  );
};

Pagination.defaultProps = {
  reviewsPerPage: 0,
  totalReviews: 0,
  currentPage: 0,
  average: 0,
};

Pagination.propTypes = {
  reviewsPerPage: PropTypes.number,
  totalReviews: PropTypes.number,
  currentPage: PropTypes.number,
  average: PropTypes.number,
  paginate: PropTypes.func.isRequired,
  incrementPage: PropTypes.func.isRequired,
  decrementPage: PropTypes.func.isRequired,
};

export default Pagination;
