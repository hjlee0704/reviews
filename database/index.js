const mongoose = require('mongoose');

const db = mongoose
  .connect('mongodb://localhost:27017/reviewDB', { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('Successfully connected to mongodb database on port 27017'))
  .catch((err) => console.log(err))

const reviewSchema = new mongoose.Schema({
  _id: Number,
  productReviews: [
    {
      _id: Number,
      name: String,
      date: String,
      rating: Number,
      description: String,
      avatar: String,
      imageUrl: String,
      recommended: Number
    }
  ]
})

const Review = mongoose.model('Review', reviewSchema);

module.exports = { Review, db }