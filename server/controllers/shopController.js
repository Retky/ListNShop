const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'node',
  password: 'fox',
  database: 'listnshop',
  port: '5432',
});

const getAllShops = async (req, res) => {
  const response = await pool.query('SELECT * FROM shops WHERE user_id = $1', [req.params.userId]);
  res.status(200).json(response.rows);
};

const getShopById = async (req, res) => {
  const response = await pool.query('SELECT * FROM shops WHERE id = $1 AND user_id = $2', [req.params.shopId, req.params.userId]);
  res.status(200).json(response.rows);
};

const createShop = async (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  await pool.query('INSERT INTO shops (name, user_id) VALUES ($1, $2)', [name, req.params.userId]);
  res.send(`Shop ${name} created for user ${req.params.userId}`);
};

const updateShop = async (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  await pool.query('UPDATE shops SET name = $1 WHERE id = $2 AND user_id = $3', [name, req.params.shopId, req.params.userId]);
  res.send(`Shop ${req.params.shopId} updated for user ${req.params.userId}`);
};

const deleteShop = async (req, res) => {
  await pool.query('DELETE FROM shops WHERE id = $1 AND user_id = $2', [req.params.shopId, req.params.userId]);
  res.send(`Shop ${req.params.shopId} deleted for user ${req.params.userId}`);
};

module.exports = {
  getAllShops,
  getShopById,
  createShop,
  updateShop,
  deleteShop,
};
