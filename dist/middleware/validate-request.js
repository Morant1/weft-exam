"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequestSchema = void 0;
const express_validator_1 = require("express-validator");
function validateRequestSchema(req, res, next) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() }); // bad data from user
    }
    next();
}
exports.validateRequestSchema = validateRequestSchema;
//# sourceMappingURL=validate-request.js.map