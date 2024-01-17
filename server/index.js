const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

//Create server
const app = express();

//Connect to DB
connectDB();

app.use(cors());

app.use(express.json());

app.use("/api/products", require("./routes/product"));

app.listen(4000, () => {
  console.log("Server is running");
});
