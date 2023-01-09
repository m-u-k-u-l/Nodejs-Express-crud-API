const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

// connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to db")
);

// Import routes
const employeeRoutes = require("./routes/employee");

// Middlewares
app.use(express.json());
app.use(cors());

// route Middlewares
app.use("/api/employee", employeeRoutes);

app.listen(4000, () => console.log("Server is runing on port : http://localhost:4000"));
