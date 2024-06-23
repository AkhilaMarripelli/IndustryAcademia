const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const dotenv=require('dotenv')
const donationRoutes = require('./routes/donationRoutes');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());





app.use('/api/users', userRoutes);
app.use('/api/donate', donationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
