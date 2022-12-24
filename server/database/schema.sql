CREATE DATABASE listnshop;

CREATE TABLE users (
  id SERIAL NOT NULL,
  name VARCHAR(30) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO users (name, email, password) VALUES
  ('Tester', 'test@test.com', 'testpassword'),
  ('Test2', 'tester2@test.com', '123456');

CREATE TABLE lists (
  id SERIAL NOT NULL,
  name VARCHAR(30) NOT NULL,
  user_id INTEGER NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO lists (name, user_id) VALUES
  ('Test List', 1),
  ('Test List 2', 1),
  ('Test List 3', 2);
