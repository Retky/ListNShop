const getLists = (req, res) => {
  res.send(`Get all lists for user ${req.params.userId}`);
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
  getLists,
  getListById,
  createList,
  updateList,
  deleteList,
};
