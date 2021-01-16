import React, { Component } from 'react';
import axios from 'axios';

import ReviewList from './ReviewList'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      start: 0,
      end: 4
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
        this.setState({
          reviews: reviews.shopReviews,
          average: reviews.average,
          total: reviews.total
        })
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
        <span>{ this.state.reviews.length }</span> Reviews
        <ReviewList reviews={ fourReviews } />
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        </div>
      </div>
    )
  }
}

export default App;