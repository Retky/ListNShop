const { Router } = require('express');

const router = Router();

// List Routes
router
  .route('/')
  .get((req, res) => {
    res.json({ Message: `List of all lists for user with id: ${req.params.id}` });
  })
  .post((req, res) => {
    console.log(req.body);
    res.json({ Message: 'Successfully created a new list' });
  });
router
  .route('/:listId')
  .get((req, res) => {
    res.json({ Message: `List with id: ${req.params.listId}` });
  })
  .put((req, res) => {
    console.log(req.body);
    res.json({ Message: `Update list with id: ${req.params.listId}` });
  })
  .delete((req, res) => {
    res.json({ Message: `Delete list with id: ${req.params.listId}` });
  });

module.exports = router;
