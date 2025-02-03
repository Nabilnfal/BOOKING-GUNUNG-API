const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const bookingRoutes = require('./routes/booking');

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/booking', bookingRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
