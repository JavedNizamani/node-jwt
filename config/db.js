const dotenv = require('dotenv');
dotenv.config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.PGDATABASE,process.env.PGUSER,process.env.PGPASSWORD,{
    dialect: process.env.PGUSER,
    host: process.env.PGHOST,
    logging: false
});

module.exports = sequelize;