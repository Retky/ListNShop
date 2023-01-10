const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'node',
  password: 'fox',
  database: 'listnshop',
  port: '5432',
});

const getAllPrices = async (req, res) => {
  const { itemId } = req.params;
  const response = await pool.query('SELECT * FROM prices WHERE item_id = $1', [itemId]);
  res.status(200).json(response.rows);
};

const getPriceById = async (req, res) => {
  const { priceId } = req.params;
  const response = await pool.query('SELECT * FROM prices WHERE id = $1', [priceId]);
  res.status(200).json(response.rows);
};

const createPrice = async (req, res) => {
  const { itemId } = req.params;
  const { price } = req.body;
  await pool.query('INSERT INTO prices (item_id, price, date) VALUES ($1, $2)', [itemId, price]);
  res.status(200).json({ message: 'Price added successfully' });
};

const updatePrice = async (req, res) => {
  const { priceId } = req.params;
  const { price } = req.body;
  await pool.query('UPDATE prices SET price = $1 WHERE id = $2', [price, priceId]);
  res.status(200).json({ message: 'Price updated successfully' });
};

const deletePrice = async (req, res) => {
  const { priceId } = req.params;
  await pool.query('DELETE FROM prices WHERE id = $1', [priceId]);
  res.status(200).json({ message: 'Price deleted successfully' });
};

module.exports = {
  getAllPrices,
  getPriceById,
  createPrice,
  updatePrice,
  deletePrice,
};
