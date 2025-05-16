// const mongoose = require("mongoose");

// const employeeSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   position: String,
//   salary: Number
// });

// module.exports = mongoose.model("Employee", employeeSchema);

const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  position: String,
  salary: Number,
  image: String, // <-- Add this line
});

module.exports = mongoose.model("Employee", employeeSchema);
