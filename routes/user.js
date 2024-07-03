const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Handle form submission
router.post('/submit', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send({ message: 'Form submitted successfully!' });
  } catch (error) {
    res.status(400).send({ message: 'Error submitting form', error });
  }
});

module.exports = router;

