var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const User = require('../../modal/User');
// const mongoose = require('mongoose');
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const employees = yield User.find();
            console.log('Successfully fetch all users');
            return employees;
        }
        catch (err) {
            console.log(`ERROR: while getting all users`);
            throw err;
        }
    });
}
// async function getEmployeeById(employeetId) {
// 	try {
// 		const employee = await Employee.findById(employeetId);
// 		if (!employee) {
// 			throw Error(`Failed to find employee by id ${employeetId}`);
// 		}
// 		logger.info(`Successfully fetch employee by id ${employeetId}`);
// 		return employee;
// 	} catch (err) {
// 		logger.error(`ERROR: while getting employee by Id ${employeetId}`);
// 		throw err;
// 	}
// }
// async function removeEmployee(employeeId) {
// 	try {
// 		await Employee.deleteOne({ _id: employeeId });
// 		logger.info(`Successfully deleted employee by id ${employeeId}`);
// 	} catch (err) {
// 		logger.error(`ERROR: cannot remove employee ${employeeId}`);
// 		throw err;
// 	}
// }
// async function updateEmployee(id, employee) {
// 	try {
// 		const objectId = new mongoose.Types.ObjectId(id);
// 		const updatedEmployee = await Employee.findOneAndUpdate({ _id: objectId }, employee, {
// 			new: true,
// 		});
// 		logger.info(`Successfully updated employee by id ${id}`);
// 		return updatedEmployee;
// 	} catch (err) {
// 		logger.error(`ERROR: cannot update employee ${id}`);
// 		throw err;
// 	}
// }
// async function addEmployee(employee) {
// 	try {
// 		const newEmployee = await Employee.create(employee);
// 		logger.info(`Successfully created employee`);
// 		return newEmployee;
// 	} catch (err) {
// 		logger.error(`ERROR: cannot create employee`);
// 		throw err;
// 	}
// }
// module.exports = {
// 	getAllEmployees,
// 	getEmployeeById,
// 	removeEmployee,
// 	updateEmployee,
// 	addEmployee,
// };
//# sourceMappingURL=users.service.js.map