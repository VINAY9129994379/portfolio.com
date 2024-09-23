require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contact');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); 

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {  })  
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error)); 

// Routes
app.use('/api/contact', contactRoutes);  

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
