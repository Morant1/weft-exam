"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3001;
//Mongo connection
mongoose_1.default.connect('mongodb://root:root@localhost:27017/admin?authMechanism=DEFAULT');
const db = mongoose_1.default.connection;
db.on('error', error => console.error('Problem with Mongo', error));
db.once('open', () => console.log('Connected to Mongo!'));
app.use(express_1.default.json());
const userRoutes = require('./api/users/users.routes');
app.use('/api/user', userRoutes);
app.listen(port, () => {
    console.log(`Resturant app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map