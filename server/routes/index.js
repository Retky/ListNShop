const { Router } = require('express');

const router = Router();

router
  .route('/')
  .get((req, res) => {
    res.json({ API: 'ListNShop' });
  });

// User Routes
router
  .route('/users')
  .get((req, res) => {
    res.json({ Message: 'list of all users' });
  })
  .post((req, res) => {
    console.log(req.body);
    res.json({ Message: 'Successfully created a new user' });
  });
router
  .route('/users/:id')
  .get((req, res) => {
    res.json({ Message: `User with id: ${req.params.id}` });
  })
  .put((req, res) => {
    console.log(req.body);
    res.json({ Message: `Update user with id: ${req.params.id}` });
  })
  .delete((req, res) => {
    res.json({ Message: `Delete user with id: ${req.params.id}` });
  });

// List Routes
router
  .route('/users/:id/lists')
  .get((req, res) => {
    res.json({ Message: `List of all lists for user with id: ${req.params.id}` });
  })
  .post((req, res) => {
    console.log(req.body);
    res.json({ Message: 'Successfully created a new list' });
  });
router
  .route('/users/:id/lists/:listId')
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

// Item Routes
router
  .route('/users/:id/items')
  .get((req, res) => {
    res.json({ Message: `List of all items for list with id: ${req.params.listId}` });
  })
  .post((req, res) => {
    console.log(req.body);
    res.json({ Message: 'Successfully created a new item' });
  });
router
  .route('/users/:id/items/:itemId')
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
