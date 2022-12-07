const { Router } = require('express');

const router = Router();

// Item Routes
router
  .route('/')
  .get((req, res) => {
    res.json({ Message: `List of all items for list with id: ${req.params.listId}` });
  })
  .post((req, res) => {
    console.log(req.body);
    res.json({ Message: 'Successfully created a new item' });
  });
router
  .route('/:itemId')
  .get((req, res) => {
    res.json({ Message: `Item with id: ${req.params.itemId}` });
  })
  .put((req, res) => {
    console.log(req.body);
    res.json({ Message: `Update item with id: ${req.params.itemId}` });
  })
  .delete((req, res) => {
    res.json({ Message: `Delete item with id: ${req.params.itemId}` });
  });

module.exports = router;
