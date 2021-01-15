const mongoose = require('mongoose');
const db = require('./index.js');
const generateReviews = require('./helpers.js')
const Review = require('./index.js').Review


const insertReviews = reviews => {
  // reviews.forEach(review => {
  //   review.save((err) => {
  //     if (err) {
  //       console.log('error occured: ', err);
  //     }
  //   })
  // })
  Review.create(reviews, (err) => {
    if (err) {
      console.log(err)
    }
  })
}

insertReviews(generateReviews())


