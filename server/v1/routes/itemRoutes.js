const { Router } = require('express');

const router = Router();
const itemController = require('../../controllers/itemController.js');

// Item Routes
router
  .get('/users/:userId/items', itemController.getAllItems)
  .get('/users/:userId/items/:itemId', itemController.getItemById)
  .post('/users/:userId/items', itemController.createItem)
  .put('/users/:userId/items/:itemId', itemController.updateItem)
  .delete('/users/:userId/items/:itemId', itemController.deleteItem);

module.exports = router;
