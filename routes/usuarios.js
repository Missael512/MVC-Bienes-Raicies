const express = require("express");
const router = express.Router();
//Controlador de usuarios
const { formulario_login,formulario_registro,formulario_forgotpass } = require("../controllers/usuarios.js");

router.get("/login", formulario_login);
router.get("/registro",formulario_registro);
router.get("/forgotpass",formulario_forgotpass);

module.exports = router;
