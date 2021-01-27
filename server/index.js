/* eslint-disable no-console */
const express = require('express');

const { Review } = require('../database/index.js');

const app = express();
const port = 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/api/reviews', (req, res) => {
  console.log('Getting reviews.....');

  Review.findById(0, (err, docs) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(docs);
    }
  })
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
