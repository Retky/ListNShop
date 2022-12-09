const { Router } = require('express');

const router = Router();
const userController = require('../../controllers/userController.js');

// User Routes
router
  .get('/', userController.getAllUsers)
  .get('/:userId', userController.getUserById)
  .post('/', userController.createUser)
  .put('/:userId', userController.updateUser)
  .delete('/:userId', userController.deleteUser);

module.exports = router;
