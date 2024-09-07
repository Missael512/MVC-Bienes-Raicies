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

module.exports = {
  formulario_login,
  formulario_registro,
  formulario_forgotpass
};
