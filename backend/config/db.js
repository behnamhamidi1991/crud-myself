const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Successfully connected to MongoDB ${conn.connection.host}`.bgCyan
        .underline
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
