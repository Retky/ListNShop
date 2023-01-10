const { Router } = require('express');

const router = Router();
const shopController = require('../../controllers/shopController.js');

// Shops Routes
router
  .get('/users/:userId/shops', shopController.getAllShops)
  .get('/users/:userId/shops/:shopId', shopController.getShopById)
  .post('/users/:userId/shops', shopController.createShop)
  .put('/users/:userId/shops/:shopId', shopController.updateShop)
  .delete('/users/:userId/shops/:shopId', shopController.deleteShop);

module.exports = router;
