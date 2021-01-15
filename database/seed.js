const mongoose = require('mongoose');
const db = require('./index.js');
const generateReviews = require('./helpers.js')


const insertReviews = reviews => {
  reviews.forEach(review => {
    review.save((err) => {
      if (err) {
        console.log('error occured: ', err);
      }
    })
  })
}

insertReviews(generateReviews())


