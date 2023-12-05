"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Option 3: Passing parameters separately (other dialects)
const sequelize = new sequelize_1.Sequelize('wheelsschema', 'root', 'davidinmysql', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = sequelize;
