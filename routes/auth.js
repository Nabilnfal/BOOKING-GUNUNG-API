const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();
const dotenv = require('dotenv');

dotenv.config();

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  User.findByUsername(username, (err, user) => {
    if (err || !user) return res.status(400).send('User not found');

    bcrypt.compare(password, user.password, (err, result) => {
      if (err || !result) return res.status(400).send('Incorrect password');

      const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    });
  });
});

router.post('/register', (req, res) => {
  const { username, password, email } = req.body;

  User.createUser(username, password, email, (err) => {
    if (err) return res.status(500).send('Error registering user');
    res.status(201).send('User registered');
  });
});

module.exports = router;
