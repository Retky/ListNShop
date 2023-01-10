const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'node',
  password: 'fox',
  database: 'listnshop',
  port: '5432',
});

const getAllListItems = async (req, res) => {
  const { listId } = req.params;
  const response = await pool.query('SELECT * FROM list_items WHERE list_id = $1', [listId]);
  res.status(200).json(response.rows);
};

const getListItemById = async (req, res) => {
  const { itemId } = req.params;
  const response = await pool.query('SELECT * FROM list_items WHERE item_id = $1', [itemId]);
  res.status(200).json(response.rows);
};

const createListItem = async (req, res) => {
  const { listId } = req.params;
  const { itemId, checked, quantity, unit } = req.body;
  await pool.query('INSERT INTO list_items (list_id, item_id, checked, quantity, unit) VALUES ($1, $2, $3, $4, $5)', [listId, itemId, checked, quantity, unit]);
  res.status(200).json({
    message: 'List item added successfully',
    body: {
      list_item: { listId, itemId, checked, quantity, unit },
    },
  });
};

module.exports = {
  getAllListItems,
  getListItemById,
  createListItem,
  updateListItem,
  deleteListItem,
};
