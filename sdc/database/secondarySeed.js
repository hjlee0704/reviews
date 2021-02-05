/* eslint-disable no-plusplus */
const fs = require('fs');
const path = require('path');
const faker = require('faker');

const filePath = path.join(__dirname, 'generated');
const file = fs.createWriteStream(`${filePath}/secondary.txt`);

const getAvatar = () => {
  const randomImg = Math.floor(Math.random() * 8);
  return `https://d1sa5mhlkaaod3.cloudfront.net/Archive//Archive/${randomImg}.jpg`;
};

const getImageUrl = () => {
  const randomImg = Math.floor(Math.random() * 998) + 1;
  return `https://d20osmzbr4jjn3.cloudfront.net/SDC/images/image${randomImg}.jpg`;
};

const getShopImage = () => {
  const randomImg = Math.floor(Math.random() * 998) + 1;
  return `https://d20osmzbr4jjn3.cloudfront.net/SDC/images/image${randomImg}.jpg`;
};

const getRandomNum = () => Math.floor(Math.random() * 9) + 5;

file.on('error', () => { console.log(err); });
let reviewId = 1;
// eslint-disable-next-line no-plusplus
for (let review = 1; review < 100; review++) {
  const randomNum = getRandomNum();
  for (let productIdGen = 1; productIdGen < randomNum; productIdGen++) {
    const reviewObj = {
      review_id: reviewId,
      avatar: getAvatar(),
      name: faker.name.findName(),
      date: faker.date.past(),
      rating: faker.random.number({ min: 1, max: 5 }),
      description: faker.lorem.paragraph(),
      imageUrl: getImageUrl(),
      recommended: faker.random.number({ min: 1, max: 500 }),
      purchasedItem: `${faker.random.words(7)}...`,
      shopImage: getShopImage(),
      product_id: productIdGen,
    };
    file.write(`${JSON.stringify(reviewObj)}\r\n`);
    reviewId++;
  }
}
file.end();
// const filePath = path.join(__dirname, 'CSV');
// const ws = fs.createWriteStream(`${filePath}/pictures.csv`);
// ws.write(`picid, fkitemid, largePics, thumbnails\n`, 'utf-8')
// let itemid = 1;
// for (let i = 1; i <= 10000000; i += 1) {
//   const random = Math.floor(Math.random() * (1000 - 1) + 1);
//   const largePics = `https://picture-service.s3.us-east-2.amazonaws.com/images498/image${random}.jpg`;
//   const thumbnails = `https://picture-service.s3.us-east-2.amazonaws.com/images70/image${random}.jpg`;
//   const record = `${i}, ${itemid}, ${largePics}, ${thumbnails}`;
//   ws.write(`${record}\n`, 'utf-8');
//   if (i % 9 === 0) {
//     itemid += 1;
//   }
//   if (i % 100000 === 0) {
//     console.log(`process: ${i / 100000}%`);
//   }
// }
// ws.end();

// {nested object} + ‘\r\n’

// // Declare your columns name here, you can add more than two!
// const records = ['itemid, description'];
// for (let i = 1; i <= 100000; i += 1) {
//   // Enter your record here
//   const desc = faker.commerce.productName();
//   // Format your record with template lit,   seperates it with comma
//   const record = `${i}, ${desc}`;
//   records.push(record);
// }
// const filePath = path.join(__dirname, 'CSV');
// fs.writeFile(`${filePath}/items.csv`, records.join('\n'))
//   .then(() => {
//     console.log('Success');
//   })
//   .catch((err) => {
//     console.error(err);
//   });