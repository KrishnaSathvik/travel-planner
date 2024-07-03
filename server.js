const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/travel_planner', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

// Test route to verify application is running
app.get('/api/test', (req, res) => {
  res.send('API is working');
});

// Routes
const userRoutes = require('./routes/user');
const blogRoutes = require('./routes/blog');
app.use('/api/user', userRoutes);
app.use('/api/blog', blogRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
