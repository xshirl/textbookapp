-- \c textbooks_db

DROP TABLE IF EXISTS genres CASCADE;
DROP TABLE IF EXISTS textbooks CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS carts CASCADE;
DROP TABLE IF EXISTS cart_products CASCADE;

CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  name TEXT,
  image TEXT
);


CREATE TABLE textbooks (
  id SERIAL PRIMARY KEY,
  title TEXT,
  author TEXT,
  price INTEGER,
  rating INTEGER,
  img TEXT,
  isincart BOOLEAN,
  isrented BOOLEAN,
  genre_id INTEGER REFERENCES genres(id)
);


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE carts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  purchased BOOLEAN
  );

CREATE TABLE cart_products (
  id SERIAL PRIMARY KEY,
  cart_id INTEGER REFERENCES carts(id),
  product_id INTEGER REFERENCES textbooks(id)
);
