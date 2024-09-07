const express = require("express");
const db = require("./config/db.js"); //Conexion a db
const cors = require("cors");
const app = express();
const path = require("path");
const morgan = require("morgan");
require("dotenv").config();
app.use(cors());
//app.use(express.json());
app.use(express.urlencoded({extended:true}));
const PORT = process.env.PORT || 3300;
app.set("view engine", "pug");
app.use(morgan("dev"));
app.use(express.static("public"));
//Rutas
const routerUsuaurios = require("./routes/usuarios.js");

app.use("/usuarios", routerUsuaurios);

app.set("views", path.join(__dirname, "./views"));

app.get("/", (req, res) => {
  res.render("welcome.pug");
});

//Base de datos
const dbconn = async()=>{
  try {
    await db.authenticate();
    db.sync()
    console.log("Conexion correcta");
  } catch (error) {
    console.log("-->", error);
  }
}
dbconn ()
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
