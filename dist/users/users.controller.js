"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const userService = require('./user.service');
// Get All Users with Pagination
// Create an endpoint to retrieve all users with pagination options (limit, offset).
// Filter Users by Name
// Create an endpoint that allows filtering users by their name.
// Filter Users by Email Address
// Create an endpoint that allows filtering users by their email address.
// Remove user from group
// Users can be associated with one or zero groups
//GET LIST
function getAllUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const employees = yield userService.getAllUsers();
            res.json(employees);
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    });
}
exports.getAllUsers = getAllUsers;
// // GET SINGLE
// async function getEmployeeById(req, res) {
// 	try {
// 		const employee = await employeeService.getEmployeeById(req.params.id);
// 		res.json(employee);
// 	} catch (err) {
// 		res.status(500).json({ message: err.message });
// 	}
// }
// // REMOVE
// async function deleteEmployeeById(req, res) {
// 	try {
// 		await employeeService.removeEmployee(req.params.id);
// 		res.end();
// 	} catch (err) {
// 		res.status(500).json({ message: err.message });
// 	}
// }
// //UPDATE
// async function updateEmployeeById(req, res) {
// 	try {
// 		const { id } = req.params;
// 		const updatedEmployee = await employeeService.updateEmployee(id, { ...req.body });
// 		res.json(updatedEmployee);
// 	} catch (err) {
// 		res.status(500).json({ message: err.message });
// 	}
// }
// //ADD
// async function addEmployee(req, res) {
// 	try {
// 		const newEmployee = req.body;
// 		await employeeService.addEmployee(newEmployee);
// 		res.status(201).json(newEmployee); // created and successed
// 	} catch (err) {
// 		res.status(500).json({ message: err.message });
// 	}
// }
// module.exports = {
// 	getAllEmployees,
// 	getEmployeeById,
// 	deleteEmployeeById,
// 	addEmployee,
// 	updateEmployeeById,
// };
//# sourceMappingURL=users.controller.js.map