const faker = require('faker');

const generateReviews = () => {
  let reviews = [];

  for (let i = 1; i <= 100; i++) {

    let review = {
      name: faker.name.firstName(),
      data: faker.date.past(),
      rating: faker.random.number({ 'min': 0, 'max': 5 }),
      description: faker.lorem.paragraph(),
      productUrl: faker.internet.url(),
      imageUrl: faker.image.imageUrl(),
      recommended: faker.random.number({ 'min': 1, 'max': 500 })
    }
    reviews.push(review)
  }
  return reviews;
}

module.exports = generateReviews;