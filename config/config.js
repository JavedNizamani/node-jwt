const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    development:{
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        host: process.env.PGHOST,
        dialect: "postgres",
        dialectOption: {
            ssl: true
        },
    },
    production: {
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        host: process.env.PGHOST,
        dialect: "postgres",
        ssl: 'require'
    }
}