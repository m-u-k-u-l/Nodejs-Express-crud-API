const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  EmpId: String,
  Empname: String,
  Dept: String
});

module.exports = mongoose.model("Employee", employeeSchema);
