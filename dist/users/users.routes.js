const express = require('express');
const { getAllEmployees, getEmployeeById, deleteEmployeeById, addEmployee, updateEmployeeById, } = require('./employees.controller');
const employeeSchema = require('../../validation/employee-schema.js');
const { validateRequestSchema } = require('../../middleware/validate-request');
const router = express.Router();
router.get('/', getAllEmployees);
router.get('/:id', getEmployeeById);
router.put('/:id', employeeSchema, validateRequestSchema, updateEmployeeById);
router.post('/', employeeSchema, validateRequestSchema, addEmployee);
router.delete('/:id', deleteEmployeeById);
module.exports = router;
//# sourceMappingURL=users.routes.js.map