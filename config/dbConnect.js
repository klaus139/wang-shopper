const mongoose = require('mongoose');
const dotenv=require('dotenv').config()

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log('MongoDB Connected');
  } catch (error) {
    console.log("Database error:", error);
  }
};

module.exports = dbConnect;
