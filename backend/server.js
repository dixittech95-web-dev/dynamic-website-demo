require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/products', productRoutes);

app.use('/public', express.static(path.join(__dirname, 'public')));
// Yeh batata hai server ko ki frontend folder kahan hai
app.use(express.static(path.join(__dirname, '..', 'frontend',)));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));