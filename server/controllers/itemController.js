const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'node',
  password: 'fox',
  database: 'listnshop',
  port: '5432',
});

const getAllItems = async (req, res) => {
  const response = await pool.query('SELECT * FROM items WHERE user_id = $1', [req.params.userId]);
  res.status(200).json(response.rows);
};

const getItemById = async (req, res) => {
  const response = await pool.query('SELECT * FROM items WHERE id = $1 AND user_id = $2', [req.params.itemId, req.params.userId]);
  res.status(200).json(response.rows);
};

const createItem = async (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  await pool.query('INSERT INTO items (name, user_id) VALUES ($1, $2)', [name, req.params.userId]);
  res.send(`Item ${name} created for user ${req.params.userId}`);
};

const updateItem = async (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  await pool.query('UPDATE items SET name = $1 WHERE id = $2 AND user_id = $3', [name, req.params.itemId, req.params.userId]);
  res.send(`Item ${req.params.itemId} updated for user ${req.params.userId}`);
};

const deleteItem = (req, res) => {
  res.send(`Delete item ${req.params.itemId}`);
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
