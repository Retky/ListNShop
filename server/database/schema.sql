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
  ('Tester2', 'tester2@test.com', '123456');
