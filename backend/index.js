/* eslint-disable no-console */
require('newrelic');
const express = require('express');
const cors = require('cors');
const path = require('path');
// const compression = require('compression');
const { reviews } = require('../database');
// const { get } = require('http');
const avatarImgUrl = 'https://d1sa5mhlkaaod3.cloudfront.net/Archive/';
const imgPath = 'https://d20osmzbr4jjn3.cloudfront.net/SDC/images/image';
const getTotal = (shopReviews) => (
  shopReviews.length
);

const getAverage = (shopReviews) => {
  const result = Math.floor(shopReviews.length / 4);
  if (result < 1) {
    return 1;
  }
  return result;
};

const PUBLIC_DIR = path.resolve(__dirname, '../public');
//const db = require('./database');
const sample = {
  sample: 'hi',
  ye: 1,
};

const app = express();
const PORT = process.env.PORT || 3001;

//db.once('open', () => console.log('Connected to MongoDB'));

app.use(cors());
app.use(express.json());
// app.use(compression());
app.use(express.static(PUBLIC_DIR));

app.get('/api/reviews/:id', (req, res) => {
  const { id } = req.params;

  // res.send(sample);
  reviews.query(`select * from reviews where product_id = ${id}`,
    (err, data) => {
      if (err) {
        res.send(err);
      }
      const getReviews = { _id: id, shopReviews: [], total: 0, average: 1 };
      data.rows.map((review) => {
        const singleReview = {
          _id: id,
          avatar: avatarImgUrl + review.avatar + '.jpg',
          name: review.name,
          date: review.date,
          rating: review.rating,
          description: review.description,
          imageUrl: imgPath + review.imageurl + '.jpg',
          purchasedItem: review.purchaseditem,
          shopImage: imgPath + review.shopimage + '.jpg',
        };
        getReviews.shopReviews.push(singleReview);
      });
      getReviews.total = getTotal(getReviews.shopReviews);
      getReviews.average = getAverage(getReviews.shopReviews);
      console.log(getReviews);
      res.send(getReviews);
    });
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
