const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('../model/user')(sequelize, DataTypes, Model);
db.sequelize.sync();

module.exports = db;