const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'node',
  password: 'fox',
  database: 'listnshop',
  port: '5432',
});

module.exports = {
  getAlllist,
  getListById,
  createList,
  updateList,
  deleteList,
};
