const db = require('../config/db');

const Mountain = {
  getAllMountains: (callback) => {
    db.query('SELECT * FROM Mountains', callback);
  },
  getMountainById: (id, callback) => {
    db.query('SELECT * FROM Mountains WHERE id = ?', [id], callback);
  }
};

module.exports = Mountain;