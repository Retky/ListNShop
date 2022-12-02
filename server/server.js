const express = require('express');
const morgan = require('morgan');
const router = require('./routes');

const app = express();

// Configuration
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/api', router);

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
