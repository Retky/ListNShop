const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'node',
  password: 'fox',
  database: 'listnshop',
  port: '5432',
});

const getAllLists = async (req, res) => {
  const response = await pool.query('SELECT * FROM lists WHERE user_id = $1', [req.params.userId]);
  res.status(200).json(response.rows);
};

const getListById = async (req, res) => {
  const response = await pool.query('SELECT * FROM lists WHERE id = $1 AND user_id = $2', [req.params.listId, req.params.userId]);
  res.status(200).json(response.rows);
};

const createList = async (req, res) => {
  const { name } = req.body;
  await pool.query('INSERT INTO lists (name, user_id) VALUES ($1, $2)', [name, req.params.userId]);
  res.send(`List ${name} created for user ${req.params.userId}`);
};

const updateList = async (req, res) => {
  const { name } = req.body;
  await pool.query('UPDATE lists SET name = $1 WHERE id = $2 AND user_id = $3', [name, req.params.listId, req.params.userId]);
  res.send(`List ${req.params.listId} updated for user ${req.params.userId}`);
};

const deleteList = async (req, res) => {
  await pool.query('DELETE FROM lists WHERE id = $1 AND user_id = $2', [req.params.listId, req.params.userId]);
  res.send(`List ${req.params.listId} deleted for user ${req.params.userId}`);
};

module.exports = {
  getAllLists,
  getListById,
  createList,
  updateList,
  deleteList,
};
