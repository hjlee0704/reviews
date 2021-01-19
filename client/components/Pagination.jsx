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
    <li key={num}>
      <a href="!#" id="numbers" className={currentPage === num && 'disabled'} onClick={(e) => paginate(e, num)}>
        {num}
      </a>
    </li>
  ));
  return (
    <div>
      <ul>
        <li>
          <a href="!#" className={currentPage !== 1 ? 'arrows' : 'disabled'} onClick={decrementPage}>
            <img src="imgs/leftArrow.png" className="arrows" alt="arrow" />
            {/* <i class="fas fa-arrow-left"></i> */}
          </a>
        </li>
      </ul>
      <ul>
        {pages}
      </ul>
      <ul>
        <li>
          <a href="!#" className={currentPage !== average + 1 ? 'arrows' : 'disabled'} onClick={incrementPage}>
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
