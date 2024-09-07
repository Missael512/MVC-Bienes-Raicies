const { DataTypes } = require("sequelize");
const db = require("../config/db.js");

const Usuario = db.define("usuarios", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  token: {
    type: DataTypes.STRING,
  },
  confirmado: DataTypes.BOOLEAN
});

module.exports = Usuario