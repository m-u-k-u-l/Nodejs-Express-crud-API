const Employee = require("../model/Employee");

// Get All employee
const employee_all = async (req, res) => {
    try {
        const employee = await Employee.find();
        res.json(employee);
      } catch (error) {
        res.json({ message: error });
      }
};

// Get Single employee
const employee_details = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.employeeId);
        res.json(employee);
      } catch (error) {
        res.json({ message: error });
      }
};

// Add New Employee
const employee_create = async (req, res) => {
    const employee = new Employee({
        EmpId: req.body.EmpId,
        Empname: req.body.Empname,
        Dept: req.body.Dept
      });
    
      try {
        const savedEmployee = await employee.save();
        res.send(savedEmployee);
      } catch (error) {
        res.status(400).send(error);
      }
};

// Update employee
const employee_update = async (req, res) => {
    try {
        const employee = {
          EmpId: req.body.EmpId,
          Empname: req.body.Empname,
          Dept: req.body.Dept
        };
    
        const updatedEmployee = await Employee.findByIdAndUpdate(
          { _id: req.params.employeeId },
          employee
        );
        res.json(updatedEmployee);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete employee
const employee_delete = async (req, res) => {
    try {
        const removeEmployee = await Employee.findByIdAndDelete(req.params.employeeId);
        res.json(removeEmployee);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    employee_all, 
    employee_details, 
    employee_create, 
    employee_update, 
    employee_delete
  }