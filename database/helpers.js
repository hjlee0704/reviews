const faker = require('faker');

const generateRandomObjects = () => {
  const reviews = [];
  const randomNum = Math.floor(Math.random() * (50 - 10 + 1) + 10);
  for (let i = 0; i < randomNum; i += 1) {
    reviews.push({
      _id: i + 1,
      name: faker.name.firstName(),
      date: faker.date.past(),
      rating: faker.random.number({ min: 0, max: 5 }),
      description: faker.lorem.paragraph(),
      avatar: faker.random.image(),
      imageUrl: faker.random.image(),
      recommended: faker.random.number({ min: 1, max: 500 }),
    });
  }
  return reviews;
};

const getTotal = (shopReviews) => (
  shopReviews.length
);

const getAverage = (shopReviews) => (
  Math.floor(shopReviews.length / 4)
);

const generateReviews = () => {
  const reviews = [];

  for (let i = 0; i < 100; i += 1) {
    const review = {
      _id: i,
      shopReviews: generateRandomObjects(),
    };
    review.total = getTotal(review.shopReviews);
    review.average = getAverage(review.shopReviews);

    reviews.push(review);
  }
  return reviews;
};

module.exports = generateReviews;
