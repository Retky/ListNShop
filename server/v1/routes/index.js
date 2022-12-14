const { Router } = require('express');

const router = Router();
const userRoutes = require('./userRoutes.js');
const listRoutes = require('./listRoutes.js');
const itemRoutes = require('./itemRoutes.js');
const listItemsRoutes = require('./listItemsRoutes.js');
const shopRoutes = require('./shopRoutes.js');
const priceRoutes = require('./priceRoutes.js');

router
  .route('/')
  .get((req, res) => {
    res.json({ API: 'ListNShop' });
  });

router.use('/', userRoutes);
router.use('/', listRoutes);
router.use('/', itemRoutes);
router.use('/', listItemsRoutes);
router.use('/', shopRoutes);
router.use('/', priceRoutes);

module.exports = router;
