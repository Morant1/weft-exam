"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("./users.controller");
const express_validator_1 = require("express-validator");
const validate_request_1 = require("../../middleware/validate-request");
const router = express_1.default.Router();
router.get('/', users_controller_1.getAllUsers);
router.get('/findByname/:name', (0, express_validator_1.param)('name', 'name muse be a string').isString, validate_request_1.validateRequestSchema, users_controller_1.filterUserByName);
router.get('/findByEmail/:email', (0, express_validator_1.param)('email', 'Invalid email').isEmail(), validate_request_1.validateRequestSchema, users_controller_1.filterUserByEmail);
router.delete('/:id', users_controller_1.deleteUser);
module.exports = router;
//# sourceMappingURL=users.routes.js.map