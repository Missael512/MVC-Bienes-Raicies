const Usuario = require("../models/Usuario.js");

const formulario_login = (req, res) => {
  res.render("auth/login", {
    pagina: "Login",
  });
};

const formulario_registro = (req, res) => {
  res.render("auth/registro", {
    pagina: "Crea tu cuenta",
  });
};

const formulario_forgotpass = (req, res) => {
  res.render("auth/forgotpass", {
    pagina: "Recuperar password",
  });
};

const registrar = async (req, res) => {
  const data = req.body;
  const usuario = await Usuario.create(data);
  res.json(usuario);
};

module.exports = {
  formulario_login,
  formulario_registro,
  formulario_forgotpass,
  registrar,
};
