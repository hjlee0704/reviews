const generateReviews = require('../database/helpers.js');
// const { MongoClient } = require('mongodb');

test('Length of array is 100', () => {
  expect(generateReviews().length).toEqual(100)
})

// describe('insert', () => {
//   let connection;
//   let db;

//   beforeAll(async () => {
//     connection = await MongoClient.connect(process.env.MONGO_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     db = await connection.db();
//   });

//   afterAll(async () => {
//     await connection.close();
//   });
// });

