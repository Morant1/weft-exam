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
const types_1 = require("../../types/types");
const User = require('../../modal/User');
const Group = require('../../modal/Group');
function getAllUsers(limit, offset) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const employees = yield User.find().limit(limit).skip(offset).lean();
            console.log('Successfully fetch all users');
            return employees;
        }
        catch (err) {
            console.log(`ERROR: while getting all users`);
            throw err;
        }
    });
}
function filterUserByName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield User.findOne({ name });
            console.log(`Successfully fetch user by name: ${name}`);
            return user;
        }
        catch (err) {
            console.log(`ERROR: while getting user by name: ${name}`);
            throw err;
        }
    });
}
function filterUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield User.findOne({ email });
            console.log(`Successfully fetch user by email: ${email}`);
            return user;
        }
        catch (err) {
            console.log(`ERROR: while getting user by email: ${email}`);
            throw err;
        }
    });
}
function deleteUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield User.findOneAndUpdate({ _id: userId }, { $unset: { groupId: 1 } });
            if (user.groupId) {
                const usersWithGroupId = yield User.find({ groupId: user.groupId });
                if (!usersWithGroupId.length) {
                    yield Group.findOneAndUpdate({ _id: user.groupId }, { status: types_1.GroupEnum.EMPTY });
                }
            }
            console.log(`Successfully deleted user by id ${userId}`);
        }
        catch (err) {
            console.log(`ERROR: cannot remove user ${userId}`);
            throw err;
        }
    });
}
module.exports = {
    getAllUsers,
    deleteUser,
    filterUserByEmail,
    filterUserByName,
};
//# sourceMappingURL=users.service.js.map