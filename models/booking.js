const db = require('../config/db');

const Booking = {
  createBooking: (user_id, mountain_id, booking_date, callback) => {
    db.query(
      'INSERT INTO Bookings (user_id, mountain_id, booking_date) VALUES (?, ?, ?)',
      [user_id, mountain_id, booking_date],
      callback
    );
  },
  
  getAllBookings: (callback) => {
    db.query('SELECT * FROM Bookings', callback);
  },
  
  getBookingById: (id, callback) => {
    db.query('SELECT * FROM Bookings WHERE id = ?', [id], callback);
  },

  updateBookingStatus: (id, status, callback) => {
    db.query('UPDATE Bookings SET status = ? WHERE id = ?', [status, id], callback);
  }
};

module.exports = Booking;
