const { Router } = require('express');

const router = Router();
const shopController = require('../../controllers/shopController.js');

// Shops Routes
router
  .get('/', shopController.getShops)
  .get('/:shopId', shopController.getShopById)
  .post('/', shopController.createShop)
  .put('/:shopId', shopController.updateShop)
  .delete('/:shopId', shopController.deleteShop);

module.exports = router;
