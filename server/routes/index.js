const { Router } = require('express');

const router = Router();

router
  .route('/')
  .get((req, res) => {
    res.json({ API: 'ListNShop' });
  });

module.exports = router;
