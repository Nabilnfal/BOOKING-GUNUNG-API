const db = require('../config/db');

const Payment = {
  createPayment: (booking_id, amount, status, callback) => {
    db.query(
      'INSERT INTO Payments (booking_id, amount, status) VALUES (?, ?, ?)',
      [booking_id, amount, status],
      callback
    );
  },

  getPaymentByBookingId: (booking_id, callback) => {
    db.query('SELECT * FROM Payments WHERE booking_id = ?', [booking_id], callback);
  },

  updatePaymentStatus: (payment_id, status, callback) => {
    db.query('UPDATE Payments SET status = ? WHERE id = ?', [status, payment_id], callback);
  }
};

module.exports = Payment;
