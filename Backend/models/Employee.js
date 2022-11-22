const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dateofbirth: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Employee", employeeSchema);
