const { Router } = require('express');

const router = Router();
const userController = require('../../controllers/userController.js');

// User Routes
router
  .get('/users', userController.getAllUsers)
  .get('/users/:userId', userController.getUserById)
  .post('/users', userController.createUser)
  .put('/users/:userId', userController.updateUser)
  .delete('/users/:userId', userController.deleteUser);

module.exports = router;
