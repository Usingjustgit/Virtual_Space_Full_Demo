const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });

const connectDB = mongoose
  .connect(`mongodb://127.0.0.1:27017/wedding_preparation`)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

module.exports = connectDB;