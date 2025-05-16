// const express = require("express");
// const router = express.Router();
// const Employee = require("../models/Employee");

// // Get all employees
// router.get("/", async (req, res) => {
//   const employees = await Employee.find();
//   res.json(employees);
// });

// // Add new employee
// router.post("/", async (req, res) => {
//   const employee = new Employee(req.body);
//   await employee.save();
//   res.json(employee);
// });

// // Update employee
// router.put("/:id", async (req, res) => {
//   const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(updated);
// });

// // Delete employee
// router.delete("/:id", async (req, res) => {
//   await Employee.findByIdAndDelete(req.params.id);
//   res.json({ message: "Deleted successfully" });
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

// Get all employees
router.get("/", async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

// Add new employee
router.post("/", async (req, res) => {
  const { name, position } = req.body;
  const newEmployee = new Employee({ name, position });
  await newEmployee.save();
  res.status(201).json(newEmployee);
});

// Delete employee
router.delete("/:id", async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
