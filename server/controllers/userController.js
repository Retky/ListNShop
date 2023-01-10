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

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  await pool.query(
    'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
    [name, email, password],
  );
  res.status(200).json({
    message: 'User added successfully',
    body: {
      user: { name, email },
    },
  });
};

const updateUser = async (req, res) => {
  const { name, email, password } = req.body;
  await pool.query(
    'UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4',
    [name, email, password, req.params.userId],
  );
  res.status(200).json({
    message: 'User updated successfully',
    body: {
      user: { name, email },
    },
  });
};

const deleteUser = async (req, res) => {
  await pool.query('DELETE FROM users WHERE id = $1', [req.params.userId]);
  res.send(`Delete user ${req.params.userId}`);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
