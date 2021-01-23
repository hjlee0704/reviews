/* eslint-disable no-console */
const express = require('express');

const { Review } = require('../database/index.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/api/reviews', (req, res) => {
  console.log('Getting reviews.....');

  Review.find({}).sort({ '_id': 1 }).exec((err, docs) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('Successfully retrieved docs');
      res.send(docs)
    }
  });
});

// Get request to sort reviews by newest date
// app.get('/api/reviews/sorted', (req, res) => {
//   console.log('Getting reviews and sorting by date....');
//   const { shopId } = req.query;
//   console.log(shopId)
//   Review.aggregate([
//     { $sort: { 'shopReviews.rating': -1 } },
//   ]).exec((err, docs) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(500);
//     } else {
//       res.send(docs[shopId])
//     }
//   });
// });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
