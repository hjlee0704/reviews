/* eslint-disable no-plusplus */
const fs = require('fs');
const path = require('path');
const faker = require('faker');

const filePath = path.join(__dirname, 'generated');
const file = fs.createWriteStream(`${filePath}/secondary1.csv`);

const getAvatar = () => Math.floor(Math.random() * 8);
 // return `https://d1sa5mhlkaaod3.cloudfront.net/Archive/${randomImg}.jpg`;


const getImageUrl = () => Math.floor(Math.random() * 998) + 1;
 // return `https://d20osmzbr4jjn3.cloudfront.net/SDC/images/image${randomImg}.jpg`;


const getShopImage = () => Math.floor(Math.random() * 998) + 1;
  //return `https://d20osmzbr4jjn3.cloudfront.net/SDC/images/image${randomImg}.jpg`;


const getRandomNum = () => Math.floor(Math.random() * 5) + 1;

// file.on('error', () => { console.log(error); });
// let reviewId = 1;
// // eslint-disable-next-line no-plusplus
// for (let review = 1; review < 100; review++) {
//   const randomNum = getRandomNum();
//   for (let productIdGen = 1; productIdGen < randomNum; productIdGen++) {
//     const reviewObj = {
//       review_id: productIdGen,
//       avatar: getAvatar(),
//       name: faker.name.findName(),
//       date: faker.date.past(),
//       rating: faker.random.number({ min: 1, max: 5 }),
//       description: faker.lorem.paragraph(),
//       imageUrl: getImageUrl(),
//       recommended: faker.random.number({ min: 1, max: 500 }),
//       purchasedItem: `${faker.random.words(7)}...`,
//       shopImage: getShopImage(),
//       product_id: review,
//     };
//     file.write(`${JSON.stringify(reviewObj)}\r\n`);
//     reviewId++;
//   }
// }
// file.end();
const getName = () => faker.name.findName();
const getDate = () => faker.date.past();
const getRating = () => faker.random.number({ min: 1, max: 5 });
const getDescription = () => faker.lorem.sentence();
const getRecommended = () => faker.random.number({ min: 1, max: 500 });
const getPurchasedItem = () => `${faker.random.words(7)}...`;

file.write('review_id, avatar, name, date, rating, description, imageUrl, recommended, purchasedItem, shopImage,product_id\n', 'utf-8');
let reviewId = 1;
for (let review = 1; review < 10000000; review++) {
  const randomNum = getRandomNum();
  for (let productIdGen = 1; productIdGen < randomNum; productIdGen++) {
    file.write(`${reviewId}, ${getAvatar()}, "${getName()}", ${getDate()}, ${getRating()}, "${getDescription()}", ${getImageUrl()}, ${getRecommended()}, "${getPurchasedItem()}", ${getShopImage()}, ${review}\n`, 'utf-8');
    reviewId++;
  }
  if (review % 100000 === 0 ) {
    console.log(`process: ${review / 100000}%`);
  }
}
console.log(reviewId);
file.end();
file.on('close', () => console.log('bye'));
