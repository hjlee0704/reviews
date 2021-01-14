const mongoose = require('mongoose');
const db = require('../database/');
const faker = require('faker');
const Review = require('../database').Review


const generateUsers = () => {
  let users = [];

  for (let i = 0; i <= 100; i++) {
    let reviewName = faker.name.firstName();
    let reviewDate = faker.date.past();
    let reviewRating = faker.random.number({ 'min': 0, 'max': 5 });
    let reviewDescription = faker.lorem.paragraph();
    let internet = faker.internet.url();
    let reviewImageUrl = faker.image.imageUrl();
    let reviewRecommend = faker.random.number({ 'min': 1, 'max': 500 });

    let review = new Review({
        name: reviewName,
        data: reviewDate,
        rating: reviewRating,
        description: reviewDescription,
        productUrl: internet,
        imageUrl: reviewImageUrl,
        recommended: reviewRecommend
    })

    review.save((err) => {
      if (err) {
        console.log('error occured: ', err);
      }
    })
  }
}

generateUsers();
