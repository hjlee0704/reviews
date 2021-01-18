const getRandomItems = (shopReviewArray) => (
  shopReviewArray[
    Math.floor(Math.random() * shopReviewArray.length)
  ]
);

module.exports = getRandomItems;
