const { Router } = require('express');

const router = Router();
const itemController = require('../../controllers/itemController.js');

// Item Routes
router
  .get('/items', itemController.getItems)
  .get('/items/:itemId', itemController.getItemById)
  .post('/items', itemController.createItem)
  .put('/items/:itemId', itemController.updateItem)
  .delete('/items/:itemId', itemController.deleteItem);

module.exports = router;
