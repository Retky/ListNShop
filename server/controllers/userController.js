const { userServices } = require('../services/userServices.js');

const getAllUsers = (req, res) => {
  const allUsers = userServices.getAllUsers();
  res.send(allUsers);
};

const getUserById = (req, res) => {
  const oneUser = userServices.getUserById(req.params.userId);
  res.send(oneUser);
};

const createUser = (req, res) => {
  const createUser = userServices.createUser(req.body);
  console.log(req.body);
  res.send(createUser);
};

const updateUser = (req, res) => {
  const updateUser = userServices.updateUser(req.params.userId, req.body);
  console.log(req.body);
  res.send(updateUser);
};

const deleteUser = (req, res) => {
  userServices.deleteUser(req.params.userId);
  res.send(`Delete user ${req.params.userId}`);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
