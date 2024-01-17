const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO);
    console.log("DB connected");
  } catch (error) {
    console.log(error);
    process.exit(1); //Stop app
  }
};

module.exports = connectDB;
