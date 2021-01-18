const generateReviews = require('../database/helpers.js');

test('Length of array is 100', () => {
  expect(generateReviews().length).toEqual(100);
});
