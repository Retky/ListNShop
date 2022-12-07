const { Router } = require('express');

const router = Router();

// User Routes
router
  .route('/')
  .get((req, res) => {
    res.json({ Message: 'list of all users' });
  })
  .post((req, res) => {
    console.log(req.body);
    res.json({ Message: 'Successfully created a new user' });
  });
router
  .route('/:userId')
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

module.exports = router;
