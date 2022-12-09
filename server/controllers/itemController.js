const getAllItems = (req, res) => {
  res.send('Get all items');
};

const getItemById = (req, res) => {
  res.send(`Get item ${req.params.itemId}`);
};

const createItem = (req, res) => {
  console.log(req.body);
  res.send('Create new item');
};

const updateItem = (req, res) => {
  console.log(req.body);
  res.send(`Update item ${req.params.itemId}`);
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
