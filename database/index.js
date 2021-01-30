/* eslint-disable no-console */
const mongoose = require('mongoose');

const db = mongoose
  .connect('mongodb://localhost/reviewDB', { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('Successfully connected to mongodb database on port 27017'))
  .catch((err) => console.log(err));

const reviewSchema = new mongoose.Schema({
  _id: Number,
  shopReviews: [
    {
      _id: Number,
      avatar: String,
      name: String,
      date: String,
      rating: Number,
      description: String,
      imageUrl: String,
      recommended: Number,
      purchasedItem: String,
      shopImage: String,
    },
  ],
  total: Number,
  average: Number,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = { Review, db };
