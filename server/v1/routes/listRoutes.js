const { Router } = require('express');

const router = Router();
const listController = require('../../controllers/listController.js');

// List Routes
router
  .get('/users/:userId/lists', listController.getAllLists)
  .get('/users/:userId/lists/:listId', listController.getListById)
  .post('/users/:userId/lists', listController.createList)
  .put('/users/:userId/lists/:listId', listController.updateList)
  .delete('/users/:userId/lists/:listId', listController.deleteList);

module.exports = router;
