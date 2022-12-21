const getAllUsers = (req, res) => {
  res.send('Get all users');
};

const getUserById = (req, res) => {
  res.send(`Get user ${req.params.userId}`);
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
