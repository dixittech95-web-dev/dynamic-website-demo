
require('dotenv').config(); // Sabse upar ye add karo
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // process.env ka use karke secure access
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Successfully!");
    } catch (err) {
        console.error("Database connection error:", err);
        process.exit(1);
    }
};

module.exports = connectDB;