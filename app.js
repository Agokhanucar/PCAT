const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const projectRoutes = require('./routes/projectRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pcat', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes
app.use('/', projectRoutes);

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
}); 