const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    employee.salary = req.body.salary;
    employee.name = req.body.name;
    employee.dateofbirth = req.body.dateofbirth;
    employee.gender = req.body.gender;

    const employee1 = await employee.save();
    res.json(employee1);
  } catch (err) {
    res.send("Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id).remove();
    // const employee1 = await employee;
    res.json(employee);
  } catch (err) {
    res.send("Error");
  }
});

router.post("/", async (req, res) => {
  const employee = new Employee({
    name: req.body.name,
    dateofbirth: req.body.dateofbirth,
    gender: req.body.gender,
    salary: req.body.salary,
  });

  try {
    const temp = await employee.save();
    res.json(temp);
  } catch (err) {
    res.send("Error" + err);
  }
});

module.exports = router;
