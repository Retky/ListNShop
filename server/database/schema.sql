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

CREATE TABLE items (
  id SERIAL NOT NULL,
  name VARCHAR(30) NOT NULL,
  user_id INTEGER NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO items (name, user_id) VALUES
  ('Test Item', 1),
  ('Test Item 2', 1),
  ('Test Item 3', 2);

CREATE TABLE list_items (
  id SERIAL NOT NULL,
  list_id INTEGER NOT NULL,
  item_id INTEGER NOT NULL,
  checked BOOLEAN NOT NULL,
  quantity INTEGER NOT NULL,
  unit VARCHAR(10) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (list_id) REFERENCES lists(id),
  FOREIGN KEY (item_id) REFERENCES items(id)
);

INSERT INTO list_items (list_id, item_id, checked, quantity, unit) VALUES
  (1, 1, false, 1, 'each'),
  (1, 2, false, 1, 'each'),
  (2, 1, false, 1, 'each'),
  (2, 2, false, 1, 'each'),
  (3, 1, false, 1, 'each'),
  (3, 2, false, 1, 'each');
