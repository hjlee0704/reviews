const Pool = require('pg').Pool;

const reviews = new Pool({
  host: '34.214.215.36',
  user: '..',
  password: '..',
  database: 'postgres',
  port: '5432',
});

reviews.connect(console.log('connected'));

module.exports = {
  reviews,
};
