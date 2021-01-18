/* eslint-disable no-console */
import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import getRandomItem from '../helpers/helpers.js';
import ReviewList from './ReviewList';
import Pagination from './Pagination';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      currentPage: 1,
      reviewsPerPage: 4,
    };
    this.getReviews = this.getReviews.bind(this);
    this.onSelectPage = this.onSelectPage.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  onSelectPage(page) {

  }

  getReviews() {
    axios.get('/api/reviews')
      .then((response) => {
        const items = response.data;
        const reviews = getRandomItem(items);
        console.log(reviews.shopReviews);
        this.setState({
          reviews: reviews.shopReviews,
        });
      });
  }

  render() {
    const { reviews, currentPage, reviewsPerPage } = this.state;
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
    // let fourReviews;
    // const { reviews, start, end, average, isLastPage } = this.state;
    // if (isLastPage) {
    //   fourReviews = reviews.slice(end);
    // } else {
    //   fourReviews = reviews.slice(start, end);
    // }

    return (
      <div>
        <span>{reviews.length}</span>
        Reviews
        <ReviewList reviews={currentReviews} />
        <div>
          <Pagination reviewsPerPage={reviewsPerPage} totalReviews={reviews.length} />
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  reviews: PropTypes.string,
};

export default App;
