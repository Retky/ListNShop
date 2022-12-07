const { Router } = require('express');

const router = Router();

// Shops Routes
router
  .route('/')
  .get((req, res) => {
    res.json({ Message: `List of all shops for user with id: ${req.params.id}` });
  })
  .post((req, res) => {
    console.log(req.body);
    res.json({ Message: 'Successfully created a new shop' });
  });
router
  .route('/:shopId')
  .get((req, res) => {
    res.json({ Message: `Shop with id: ${req.params.shopId}` });
  })
  .put((req, res) => {
    console.log(req.body);
    res.json({ Message: `Update shop with id: ${req.params.shopId}` });
  })
  .delete((req, res) => {
    res.json({ Message: `Delete shop with id: ${req.params.shopId}` });
  });

module.exports = router;
