/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const path = require('path');
const compression = require('compression');

const PUBLIC_DIR = path.resolve(__dirname, '../client/dist');
const router = require('./router');
//const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3001;

//db.once('open', () => console.log('Connected to MongoDB'));

app.use(cors());
app.use(express.json());
app.use(compression());
app.use(express.static(PUBLIC_DIR));

app.use('/api/rooms/', router);

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
// const { Review } = require('../database/index.js');

// const app = express();
// const port = 3002;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(express.static('public'));

// app.get('/api/reviews/:id', (req, res) => {
//   console.log('Getting reviews.....');
//   Review.findById(req.params.id, (err, docs) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(500);
//     } else {
//       res.send(docs);
//     }
//   })
// });

// app.listen(port, () => {
//   console.log(`listening on port ${port}`);
// });

