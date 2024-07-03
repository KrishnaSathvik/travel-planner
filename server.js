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

// Simple schema and model for testing
const TestSchema = new mongoose.Schema({
  name: String
});
const TestModel = mongoose.model('Test', TestSchema);

// Route to add test data to MongoDB
app.post('/api/test', async (req, res) => {
  const testData = new TestModel({ name: req.body.name });
  try {
    await testData.save();
    res.status(201).send('Test data saved');
  } catch (error) {
    res.status(500).send('Error saving test data');
  }
});

// Route to retrieve test data from MongoDB
app.get('/api/test/data', async (req, res) => {
  try {
    const testData = await TestModel.find();
    res.status(200).json(testData);
  } catch (error) {
    res.status(500).send('Error retrieving test data');
  }
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
