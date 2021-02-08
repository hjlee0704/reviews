const Pool = require('pg').Pool;

const reviews = new Pool({
  host: 'localhost',
  user: 'postgres',
  database: 'reviews',
  port: '5432',
});

reviews.connect(console.log('connected'));

module.exports = {
  reviews,
};
