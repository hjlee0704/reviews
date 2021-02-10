const Pool = require('pg').Pool;

const reviews = new Pool({
  host: 'ec2-34-214-215-36.us-west-2.compute.amazonaws.com',
  user: 'postgres',
  password: 'your-pass',
  database: 'postgres',
  port: '5432',
});

reviews.connect(console.log('connected'));

module.exports = {
  reviews,
};
