const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
// imports
const authRoutes = require('./routes/auth');
// app middlewares
app.use(morgan('dev'));
app.use(express.json());
//app.use(cors());
if ((process.env.NODE_ENV = 'development')) {
  app.use(cors({ origin: 'http://localhost:3000' }));
}

// middleware
app.use('/api', authRoutes);

const port = process.env.port || 4000;

app.listen(port, () => {
  console.log(`Api is running on port= ${port}`);
});
