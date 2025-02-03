const bcrypt = require('bcryptjs');
const db = require('../config/db');

const User = {
  findByUsername: (username, callback) => {
    db.query('SELECT * FROM Users WHERE username = ?', [username], (err, result) => {
      if (err) return callback(err);
      return callback(null, result[0]);
    });
  },
  createUser: (username, password, email, callback) => {
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) return callback(err);

      db.query('INSERT INTO Users (username, password, email) VALUES (?, ?, ?)', [username, hashedPassword, email], callback);
    });
  }
};

module.exports = User;
