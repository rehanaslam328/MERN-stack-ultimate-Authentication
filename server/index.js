const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()
const app = express();
// imports
const authRoutes = require('./routes/auth');
// app middlewares

// middleware
app.use('/api', authRoutes);



const port = process.env.port || 4000;

app.listen(port, () => { console.log(`Api is running on port= ${port}`) });

