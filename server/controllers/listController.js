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

const getListById = (req, res) => {
  res.send(`Get list ${req.params.listId} for user ${req.params.userId}`);
};

const createList = (req, res) => {
  console.log(req.body);
  res.send(`Create new list for user ${req.params.userId}`);
};

const updateList = (req, res) => {
  console.log(req.body);
  res.send(`Update list ${req.params.listId} for user ${req.params.userId}`);
};

const deleteList = (req, res) => {
  res.send(`Delete list ${req.params.listId} for user ${req.params.userId}`);
};

module.exports = {
  getAllLists,
  getListById,
  createList,
  updateList,
  deleteList,
};
