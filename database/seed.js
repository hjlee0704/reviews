/* eslint-disable no-console */
const generateReviews = require('./helpers.js');
const { Review } = require('./index.js');

const insertReviews = (reviews) => {
  Review.create(reviews, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

insertReviews(generateReviews());
