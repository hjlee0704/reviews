import React, { Component } from 'react';
import axios from 'axios';

import ReviewList from './ReviewList'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      average: null,
      total: null
    }
    this.getReviews = this.getReviews.bind(this);
    this.getRandomItem = this.getRandomItem.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    axios.get('/api/reviews')
      .then((response) => {
        const items = response.data;
        const reviews = this.getRandomItem(items);
        this.setState({ reviews: reviews.shopReviews })
      })
  }

  getRandomItem(shopReviewArray) {
    return shopReviewArray[
      Math.floor(Math.random() * shopReviewArray.length)
    ];
  }

  render() {
    let fourReviews = this.state.reviews.slice(this.state.start, this.state.end)
    return (
      <div>
        100 Reviews
        <ReviewList reviews={ fourReviews } />
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
    )
  }
}

export default App;