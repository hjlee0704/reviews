/* eslint-disable no-console */
import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import ReviewList from './ReviewList';
import Pagination from './Pagination';
import Dropdown from './Dropdown';

class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      currentPage: 1,
      reviewsPerPage: 4,
      average: null,
    };
    this.getReviews = this.getReviews.bind(this);
    this.paginate = this.paginate.bind(this);
    this.incrementPage = this.incrementPage.bind(this);
    this.decrementPage = this.decrementPage.bind(this);
    this.onSortReviews = this.onSortReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  onSortReviews(sortQuery) {
    const { reviews } = this.state;
    let sorted;
    if (sortQuery === 'Newest') {
      sorted = reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
      sorted = reviews.sort((a, b) => b.recommended - a.recommended);
      console.log(sorted);
    }

    this.setState({ reviews: sorted, currentPage: 1 });
  }

  getReviews() {
    axios.get('/api/reviews')
      .then((response) => {
        const reviews = response.data;
        let newAverage;
        console.log(reviews)
        if (reviews.shopReviews.length % reviews.average !== 0) {
          newAverage = reviews.average + 1;
        }
        this.setState({
          reviews: reviews.shopReviews,
          average: newAverage || reviews.average,
        });
      });
  }

  paginate(e, pageNum) {
    e.preventDefault();
    console.log(pageNum)
    window.scrollTo(0, 0);
    this.setState({ currentPage: pageNum });
  }

  incrementPage(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage + 1 });
  }

  decrementPage(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage - 1 });
  }

  render() {
    const {
      reviews,
      currentPage,
      reviewsPerPage,
      average,
    } = this.state;

    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

    return (
      <div className="main-container">
        <span>
          {reviews.length}
          <span id="heading">shop reviews</span>
        </span>
        <Dropdown reviews={reviews} onSortReviews={this.onSortReviews} />
        <ReviewList reviews={currentReviews} />
        <div>
          <Pagination
            reviewsPerPage={reviewsPerPage}
            totalReviews={reviews.length}
            paginate={this.paginate}
            incrementPage={this.incrementPage}
            decrementPage={this.decrementPage}
            currentPage={currentPage}
            average={average}
          />
        </div>
      </div>
    )
  }
}

Reviews.defaultProps = {
  reviews: PropTypes.string,
};

export default Reviews;
