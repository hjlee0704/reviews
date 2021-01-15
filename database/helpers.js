const faker = require('faker');

const generateReviews = () => {
  let reviews = [];

  for (let i = 0; i < 100; i++) {

    let review = {
      _id: i,
      shopReviews: generateRandomObjects(),
    }
    console.log(review.shopReviews)
    review['total'] = getTotal(review.shopReviews);
    review['average'] = getAverage(review.shopReviews);

    reviews.push(review)
  }
  return reviews;
}

const generateRandomObjects = () => {
  const reviews = [];
  const randomNum = Math.floor(Math.random() * 20) + 1;
  for (let i = 0; i < randomNum; i++) {
    reviews.push({
      _id: i,
      name: faker.name.firstName(),
      data: faker.date.past(),
      rating: faker.random.number({ 'min': 0, 'max': 5 }),
      description: faker.lorem.paragraph(),
      avatar: faker.image.people(),
      imageUrl: faker.image.imageUrl(),
      recommended: faker.random.number({ 'min': 1, 'max': 500 })
    })
  }
  return reviews;
}

const getTotal = (shopReviews) => {
  return shopReviews.length;
}

const getAverage = (shopReviews) => {
  return Math.floor(shopReviews.length / 4)
}

module.exports = generateReviews;