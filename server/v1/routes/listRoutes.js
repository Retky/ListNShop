const { Router } = require('express');

const router = Router();
const listController = require('../../controllers/listController.js');

// List Routes
router
  .get('/', listController.getAllLists)
  .get('/:listId', listController.getListById)
  .post('/', listController.createList)
  .put('/:listId', listController.updateList)
  .delete('/:listId', listController.deleteList);

module.exports = router;
