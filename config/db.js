const Sequelize = require('sequelize');

const sequelize = new Sequelize('api','postgres','admin123',{
    dialect: 'postgres',
    host: 'localhost',
    logging: false
});

module.exports = sequelize;