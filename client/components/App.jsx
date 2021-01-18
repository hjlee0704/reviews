/* eslint-disable no-console */
import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import getRandomItem from '../helpers/helpers.js';
import ReviewList from './ReviewList';
import Buttons from './Buttons';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      start: 0,
      end: 4,
      average: 0,
      counter: 0,
    };
    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    axios.get('/api/reviews')
      .then((response) => {
        const items = response.data;
        const reviews = getRandomItem(items);
        this.setState({
          reviews: reviews.shopReviews,
          average: reviews.average,
        });
      });
  }

  render() {
    const { reviews, start, end, counter, average } = this.state;
    const fourReviews = reviews.slice(start, end);
    console.log(fourReviews);
    return (
      <div>
        <span>{reviews.length}</span>
        Reviews
        <ReviewList reviews={fourReviews} />
        <div>
          <Buttons counter={counter} average={average} />
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  reviews: PropTypes.string,
};

export default App;
