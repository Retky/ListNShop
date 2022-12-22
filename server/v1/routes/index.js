const { Router } = require('express');

const router = Router();
const userRoutes = require('./userRoutes.js');
const listRoutes = require('./listRoutes.js');
const itemRoutes = require('./itemRoutes.js');
const shopRoutes = require('./shopRoutes.js');

router
  .route('/')
  .get((req, res) => {
    res.json({ API: 'ListNShop' });
  });

router.use('/', userRoutes);
router.use('/', listRoutes);
// router.use('/users/:id/items', itemRoutes);
// router.use('/users/:id/shops', shopRoutes);

module.exports = router;
