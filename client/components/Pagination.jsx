import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ reviewsPerPage, totalReviews}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  const pages = pageNumbers.map((num) => (
    <li key={num}>
      <a href="!#">
        {num}
      </a>
    </li>
  ));
  return (
    <ul>
      {pages}
    </ul>
  );
};

Pagination.defaultProps = {
  reviewsPerPage: 0,
  totalReviews: 0,
};

Pagination.propTypes = {
  reviewsPerPage: PropTypes.number,
  totalReviews: PropTypes.number,
};

export default Pagination;
