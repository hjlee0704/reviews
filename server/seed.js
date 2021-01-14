const mongoose = require('mongoose');
const db = require('../database/');
const faker = require('faker');
const Review = require('../database').Review


const generateUsers = () => {
  let users = [];

  for (let i = 0; i <= 100; i++) {

    let review = new Review({
        name: faker.name.firstName(),
        data: faker.date.past(),
        rating: faker.random.number({ 'min': 0, 'max': 5 }),
        description: faker.lorem.paragraph(),
        productUrl: faker.internet.url(),
        imageUrl: faker.image.imageUrl(),
        recommended: faker.random.number({ 'min': 1, 'max': 500 })
    })

    review.save((err) => {
      if (err) {
        console.log('error occured: ', err);
      }
    })
  }
}

generateUsers();
