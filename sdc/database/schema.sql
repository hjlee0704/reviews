CREATE TABLE product (
  ID INT PRIMARY KEY NOT NULL,
  product_name VARCHAR(50) NOT NULL,

)


CREATE TABLE Review (
  ID INT PRIMARY KEY NOT NULL,
  avatar VARCHAR(50) NOT NULL,
  name VARCHAR(50) NOT NULL,
  date VARCHAR(50) NOT NULL,
  rating INT,
  description VARCHAR(100),
  imageUrl VARCHAR(100),
  recommended INT,
  purchasedItem VARCHAR(50),
  shopImagem VARCHAR(100),
)
