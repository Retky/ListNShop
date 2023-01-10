const { Router } = require('express');

const router = Router();
const priceController = require('../../controllers/priceController.js');

// Price Routes
router
  .get('/users/:userId/items/:itemId/prices', priceController.getAllPrices)
  .get('/users/:userId/items/:itemId/prices/:priceId', priceController.getPriceById)
  .post('/users/:userId/items/:itemId/prices', priceController.createPrice)
  .put('/users/:userId/items/:itemId/prices/:priceId', priceController.updatePrice)
  .delete('/users/:userId/items/:itemId/prices/:priceId', priceController.deletePrice);

module.exports = router;
