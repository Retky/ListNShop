const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'node',
  password: 'fox',
  database: 'listnshop',
  port: '5432',
});

const getAllUsers = async (req, res) => {
  const response = await pool.query('SELECT * FROM users');
  res.status(200).json(response.rows);
};

const getUserById = async (req, res) => {
  const response = await pool.query('SELECT * FROM users WHERE id = $1', [
    req.params.userId,
  ]);
  res.status(200).json(response.rows);
};

const createUser = (req, res) => {
  console.log(req.body);
  res.send('Create new user');
};

const updateUser = (req, res) => {
  console.log(req.body);
  res.send(`Update user ${req.params.userId}`);
};

const deleteUser = (req, res) => {
  res.send(`Delete user ${req.params.userId}`);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
