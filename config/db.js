const Sequelize = require("sequelize");
require('dotenv').config();

const db = new Sequelize(process.env.BD_Name, "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  define: {
    timestamps: true,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = db;
