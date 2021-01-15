const express = require('express');
const path = require('path');

const Review = require('../database/index.js').Review

let app = express();
let port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'));

app.get('/api/reviews', (req, res) => {
  console.log('Getting reviews.....');

  Review.find({}, (err, docs) => {
    if (err) {
      console.log(err)
      res.sendStatus(500);
    } else {
      res.send(docs)
    }
  })
})

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});