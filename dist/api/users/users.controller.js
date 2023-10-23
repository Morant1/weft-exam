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
exports.deleteUser = exports.filterUserByEmail = exports.filterUserByName = exports.getAllUsers = void 0;
const usersService = require('./users.service');
function getAllUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { limit, offset } = req.query;
            const users = yield usersService.getAllUsers(limit, offset);
            console.log(users);
            return users;
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    });
}
exports.getAllUsers = getAllUsers;
function filterUserByName(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name } = req.params;
            const user = yield usersService.filterUserByName(name);
            return user;
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    });
}
exports.filterUserByName = filterUserByName;
function filterUserByEmail(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // const errors = validationResult(req); // should be a validation middleware
            // if (!errors.isEmpty()) {
            // 	return res.status(400).json({
            // 		errors: errors.array(),
            // 	});
            // }
            const { email } = req.params;
            const user = yield usersService.filterUserByEmail(email);
            return user;
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    });
}
exports.filterUserByEmail = filterUserByEmail;
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            yield usersService.deleteUser(id);
            res.end();
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    });
}
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.controller.js.map