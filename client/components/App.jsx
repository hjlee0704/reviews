/* eslint-disable no-console */
import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import getRandomItem from '../helpers/helpers.js';
import ReviewList from './ReviewList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      start: 0,
      end: 4,
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
        });
      });
  }

  render() {
    const { reviews, start, end } = this.state;
    const fourReviews = reviews.slice(start, end);
    console.log(fourReviews);
    return (
      <div>
        <span>{reviews.length}</span>
        Reviews
        <ReviewList reviews={fourReviews} />
        <div>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button">4</button>
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  reviews: PropTypes.string,
};

export default App;
