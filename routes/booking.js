const express = require('express');
const Mountain = require('../models/mountain');
const Booking = require('../models/booking');
const authenticateJWT = require('../middleware/auth');
const router = express.Router();

router.get('/mountains', (req, res) => {
  Mountain.getAllMountains((err, result) => {
    if (err) return res.status(500).send('Error fetching mountains');
    res.json(result);
  });
});

router.post('/book', authenticateJWT, (req, res) => {
  const { mountain_id, booking_date } = req.body;
  const user_id = req.user.id;

  // Check if the mountain exists
  Mountain.getMountainById(mountain_id, (err, mountain) => {
    if (err || !mountain) return res.status(404).send('Mountain not found');

    // Create booking
    db.query('INSERT INTO Bookings (user_id, mountain_id, booking_date) VALUES (?, ?, ?)', [user_id, mountain_id, booking_date], (err, result) => {
      if (err) return res.status(500).send('Error creating booking');
      res.status(201).send('Booking created');
    });
  });
});

module.exports = router;
