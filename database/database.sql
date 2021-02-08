CREATE DATABASE reviews

CREATE TABLE productId (
  product_id INT PRIMARY KEY,

);

CREATE TABLE reviews (
  review_id INT PRIMARY KEY,
  avatar INT,
  name VARCHAR(50),
  date VARCHAR(100),
  rating INT,
  description VARCHAR(250),
  imageUrl INT,
  recommended INT,
  purchasedItem VARCHAR(100),
  shopImage INT,
  product_id INT REFERENCES productid(product_id)
);

ALTER TABLE "productid" ADD FOREIGN KEY ("product_id") REFERENCES "reviews" ("product_id");

COPY productid(product_id) from '/Users/anthonylee/hackreactor/SDC/reviews-service/database/generated/secondary.txt' delimiter ',' CSV HEADER;                                                                                                                                                          


COPY reviews (review_id, avatar, name, date, rating, description, imageUrl, recommended, purchasedItem, shopImage, product_id) from '/Users/anthonylee/hackreactor/SDC/reviews-service/database/generated/secondary.csv' delimiter ',' CSV HEADER;

