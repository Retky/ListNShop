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

const updateListItem = async (req, res) => {
  const { itemId } = req.params;
  const { listId, checked, quantity, unit } = req.body;
  await pool.query('UPDATE list_items SET list_id = $1, checked = $2, quantity = $3, unit = $4 WHERE item_id = $5', [listId, checked, quantity, unit, itemId]);
  res.status(200).json({
    message: 'List item updated successfully',
    body: {
      list_item: { listId, itemId, checked, quantity, unit },
    },
  });
};

const deleteListItem = async (req, res) => {
  const { itemId } = req.params;
  await pool.query('DELETE FROM list_items WHERE item_id = $1', [itemId]);
  res.status(200).json({
    message: 'List item deleted successfully',
    body: {
      list_item: { itemId },
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
