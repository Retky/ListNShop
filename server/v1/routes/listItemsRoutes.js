const { Router } = require('express');

const router = Router();
const listItemsController = require('../../controllers/listItemsController.js');

// List-items Routes
router
  .get('/users/:userId/lists/:listId/items', listItemsController.getAllListItems)
  .get('/users/:userId/lists/:listId/items/:itemId', listItemsController.getListItemById)
  .post('/users/:userId/lists/:listId/items', listItemsController.createListItem)
  .put('/users/:userId/lists/:listId/items/:itemId', listItemsController.updateListItem)
  .delete('/users/:userId/lists/:listId/items/:itemId', listItemsController.deleteListItem);

module.exports = router;
